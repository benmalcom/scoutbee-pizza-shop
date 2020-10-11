import React, { useContext } from 'react';
import BootstrapTable, { ColumnDescription } from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
// @ts-ignore
import cellEditFactory from 'react-bootstrap-table2-editor';
// @ts-ignore
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';

import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import { Link } from 'react-router-dom';

import './Home.scss';
import { Pizza, PizzaIngredient } from '../../../data/mock';
import { PizzaItemContext } from '../../../components/PizzaContext';

import StatusUpdater from './StatusUpdater';

const { SearchBar } = Search;

function getTableColumns({ updateItemStatus }: any) : ColumnDescription[] {
  return [{
    dataField: 'name',
    text: 'Name',
    headerStyle: {
      width: '20%',
    },
    sort: true,
    editable: false
  }, {
    dataField: 'status',
    text: 'Status',
    headerStyle: {
      width: '20%',
    },
    sort: true,
    formatter(status: string, row: Pizza, rowIndex: number) {
      const isReady = status.toLowerCase() === 'ready';
      return <span className={isReady ? 'text-success' : undefined}>{status}</span>;
    }
  }, {
    dataField: 'ingredients',
    text: 'Ingredients',
    headerStyle: {
      width: '40%',
    },
    editable: false,
    sort: true,
    formatter(ingredients: PizzaIngredient[]) {
      return <>{ingredients.map(item => <span key={item.id}
                                              className="badge badge-light mr-2">{item.name}</span>)}</>;
    },
  }, {
    dataField: 'status',
    text: 'Action(s)',
    headerStyle: {
      width: '20%',
    },
    sort: false,
    formatter(status: string, row: Pizza, rowIndex: number) {
      return <button className="btn btn-link text-info btn-sm">Change status</button>;
    },
    // @ts-ignore
    editorRenderer(editorProps: any, value: any, row: Pizza, column: string, rowIndex: number) {
      return <StatusUpdater {...editorProps} handleChange={() => updateItemStatus(row)} item={row}/>;
    },
  }]
}

const Home = () => {
  const { items, setItems } = useContext(PizzaItemContext);

  const updateItemStatus = (item: Pizza) => {
    setItems((current: Pizza[]) => {
      const items = [...current];
      for (let i = 0; i < items.length; i++) {
        if (items[i].id === item.id) {
          items[i] = item;
          break;
        }
      }
      return items;
    });
  };

  const options = {
    sizePerPage: 10,
    hideSizePerPage: false,
    hidePageListOnlyOnePage: true,
  };

  return <div className="Home mt-5">
    <h3 className="mb-3">Pizza Status</h3>
    <div className="alert alert-light shadow-sm mb-5" role="alert">
      <Link className="btn btn-info btn-sm" to="/pizza/make">Make Pizza</Link>
    </div>
    <ToolkitProvider
      keyField="id"
      data={items}
      columns={getTableColumns({ updateItemStatus })}
      search
      bootstrap4
    >
      {(props: any) => <div>
        <SearchBar {...props.searchProps} />
        <BootstrapTable
          hover
          cellEdit={cellEditFactory({ mode: 'click', blurToSave: true })}
          pagination={paginationFactory(options)}
          noDataIndication={() => (<div>No Pizza available</div>)}
          {...props.baseProps} />
      </div>}

    </ToolkitProvider>
  </div>;
};

export default Home;
