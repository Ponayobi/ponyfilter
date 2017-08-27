import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import styled from 'styled-components';
import { List } from 'immutable';
import IconNew from 'material-ui/svg-icons/av/fiber-new';
import IconFilter from 'material-ui/svg-icons/content/filter-list';
import {
  AppBar, Card, CardHeader, CardText, Dialog, FlatButton, GridList, GridTile, IconButton, MenuItem,
  SelectField, Subheader, TextField, Toggle,
} from 'material-ui';
import { makeSelectPony } from './selectors';

const ContentLeft = styled.div`float: right`;
const ContentWrapper = styled.div`
  margin: 0 auto;
  max-width: 900px;
`;
const NothingShowWrapper = styled.div`
  text-align: center;
`;

class HomePage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  state = {
    open: false,
    results: this.props.pony.slice(0, 20) || List([]),
    filter: {},
  };

  openModal = () => {
    this.setState({ open: true });
  };

  closeModal = () => {
    this.setState({ open: false });
  };

  applyFilters = () => {
    let results = this.props.pony;
    const filters = Object.keys(this.state.filter);
    filters.forEach((key) => {
      const value = this.state.filter[key];
      if (key === 'price_from' || key === 'price_to') {
        const prices = this.props.pony.map((item) => item.get('price'));
        const priceFrom = this.state.filter.price_from || prices.min();
        const priceTo = this.state.filter.price_to || prices.max();

        results = results.filter((item) => {
          const price = item.get('price');
          return price >= priceFrom && price <= priceTo;
        });
      } else {
        results = results.filter((item) => item.get(key) === value);
      }
    });
    this.setState({
      results: results.slice(0, 20),
    });
    this.closeModal();
  };

  resetFilters = () => {
    this.setState({ results: this.props.pony.slice(0, 20), filter: {} });
    this.closeModal();
  };

  handleChangeColor = (event, index, value) => {
    const filter = this.state.filter;
    filter.color = value;
    this.setState({ filter });
  };
  handleChangeKind = (event, index, value) => {
    const filter = this.state.filter;
    filter.kind = value;
    this.setState({ filter });
  };
  handleChangePriceFrom = (event, newValue) => {
    const filter = this.state.filter;
    filter.price_from = newValue;
    this.setState({ filter });
  };
  handleChangePriceTo = (event, newValue) => {
    const filter = this.state.filter;
    filter.price_to = newValue;
    this.setState({ filter });
  };
  handleChangeIsNew = (event, isInputChecked) => {
    const filter = this.state.filter;
    filter.is_new = isInputChecked;
    if (!isInputChecked) {
      delete filter.is_new;
    }
    this.setState({ filter });
  };

  renderMenuItems = (array) => array.map((item, i) => <MenuItem key={i} value={item} primaryText={item} />);

  render() {
    const { pony } = this.props;
    const prices = pony.map((item) => item.get('price'));
    const colors = pony.reduce((x, y) => x.includes(y.get('color')) ? x : [...x, y.get('color')], []);
    const kinds = pony.reduce((x, y) => x.includes(y.get('kind')) ? x : [...x, y.get('kind')], []);

    const actions = [
      <FlatButton
        label="Close"
        primary
        onClick={this.closeModal}
      />,
      <FlatButton
        label="Reset"
        primary
        disabled={!Object.keys(this.state.filter).length}
        onClick={this.resetFilters}
      />,
      <FlatButton
        label="Find"
        primary
        onClick={this.applyFilters}
      />,
    ];

    return (
      <div>
        <Helmet
          title="Home"
          meta={[
            { name: 'description', content: 'list of pony' },
          ]}
        />
        <Dialog
          title="Filter"
          actions={actions}
          open={this.state.open}
        >
          <SelectField
            floatingLabelText="Color"
            value={this.state.filter.color}
            onChange={this.handleChangeColor}
          >
            {this.renderMenuItems(colors)}
          </SelectField>
          <SelectField
            floatingLabelText="Kind"
            value={this.state.filter.kind}
            onChange={this.handleChangeKind}
          >
            {this.renderMenuItems(kinds)}
          </SelectField>
          <TextField
            floatingLabelText="Price from"
            min={prices.min()}
            value={this.state.filter.price_from}
            max={this.state.filter.price_to}
            onChange={this.handleChangePriceFrom}
          />
          <TextField
            floatingLabelText="Price to"
            value={this.state.filter.price_to}
            min={this.state.filter.price_from}
            max={prices.max()}
            onChange={this.handleChangePriceTo}
          />
          <Toggle
            label="New"
            toggled={this.state.filter.is_new}
            onToggle={this.handleChangeIsNew}
          />
        </Dialog>
        <AppBar
          title="Pony store"
          showMenuIconButton={false}
          onRightIconButtonTouchTap={this.openModal}
          iconElementRight={<IconButton tooltip="Pony filter"><IconFilter /></IconButton>}
        />
        <ContentWrapper>
          <GridList
            cellHeight="auto"
            cols={4}
          >
            <Subheader>Results: {this.state.results.size}</Subheader>
            {this.state.results.size > 0 ? this.state.results.map((tile, i) => (
              <GridTile key={i}>
                <Card>
                  <CardHeader
                    title={tile.get('name')}
                  >
                    <ContentLeft>
                      {tile.get('is_new') ? <IconNew /> : null}
                    </ContentLeft>
                  </CardHeader>
                  <CardText>
                    Price: {tile.get('price')}$ <br />
                    Kind: {tile.get('kind')} <br />
                    Color: {tile.get('color')}
                  </CardText>
                </Card>
              </GridTile>
            )) : <Subheader><NothingShowWrapper>Nothing to show</NothingShowWrapper></Subheader>}
          </GridList>
        </ContentWrapper>
      </div>
    );
  }
}

HomePage.propTypes = {
  pony: PropTypes.instanceOf(List),
};

const mapStateToProps = createStructuredSelector({
  pony: makeSelectPony(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
