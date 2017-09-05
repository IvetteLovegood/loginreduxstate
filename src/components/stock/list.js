import ReactSuperSelect from 'react-super-select';
import React, { Component } from 'react';
import './../../css/react-super-select.css';
import classie from 'classie';
import ReactModal from 'react-modal';
import WOW from 'wowjs';
const wow = new WOW.WOW();
wow.init();

// const heroku = "https://cors-anywhere.herokuapp.com/";
// const produrl = "http://yaxche.mx:8281/";
const baseurl = "http://localhost:3001/";
const listurl = "stock/product/list";
const header = { 'Content-Type': 'application/json' };
const modecors = "request-no-cors";
const companyId = "e9d95960-7803-11e7-bbb0-db0815bb6dd9";
const url = 'data.json';

var data, loading, shopCartId = "";

class InventarioList extends Component {

    constructor(props) {
        super(props)

        this.onDetail = this.onDetail.bind(this);
        this.onModify = this.onModify.bind(this);
        this.addShopCart = this.addShopCart.bind(this);

        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
        this.handleQuantityChange = this.handleQuantityChange.bind(this);

        this.state = {
            productId: "",
            productList: [],
            testData: [],
            shopCartId: "",
            quantity: "1",
            showModal: false
        }
    }

    handleOpenModal(event) {
        this.setState({ showModal: true });

        shopCartId = event.target.id;
        console.log(shopCartId);
        this.setState({ shopCartId: shopCartId })
    }

    addShopCart(event) {
        event.preventDefault();
        this.setState({ showModal: false });
    }

    handleCloseModal() {
        this.setState({ showModal: false });
        this.setState({ shopCartId: "" })
    }

    handleQuantityChange(event) {

        event.preventDefault();

        this.setState({ quantity: event.target.value })

    }
    onDetail(event) {
        event.preventDefault();
        var clickedId = event.target.id;
        console.log(clickedId);
        this.setState({
            productId: event.target.id
        })
        this.props.history.push('/detail/' + clickedId)
    }

    onModify(event) {
        event.preventDefault();
        var clickedId = event.target.id;
        console.log(clickedId);
        this.setState({
            productId: event.target.id
        })
        this.props.history.push('/modify/' + clickedId)
    }

    handleErrors(response) {
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return response;
    }

    componentDidMount() {

        wow.sync();

        loading = document.getElementById('loadingdiv');
        classie.add(loading, 'hideMenu');

        data = JSON.stringify({ "companyId": companyId });

        fetch(baseurl + listurl, { method: 'POST', mode: modecors, headers: header, body: data })
            .then(response => response.json())
            .then(response => this.setState({ productList: response.productList }))
            .catch(err => console.log(err));

        fetch(url, { method: 'GET', headers: header })
            .then((response) => { return response.json() })
            .then((response) => { this.setState({ testData: response.customers }) })
            .catch(err => console.log(err));

    }

    render() {
        var handlerExample = function(option) {
            //Evento para cachar el onnchange del select
            console.log(option);
        };

        let productListId = this.state.productList.filter(function(productoId) {
            return productoId.productId === shopCartId;
        });

        return (
            <div id="page-wrapper">
            <div className="main-page">
              <div className="container-fluid">
              <h4 className="sectiontitle wow slideInRight titlelink">Inventario</h4>
                <ReactModal id="modal1"
                   isOpen={this.state.showModal}
                   contentLabel="onRequestClose AddArticulo"
                   onRequestClose={this.handleCloseModal}
                   className="modal-main modal-content"
                   overlayClassName="overlay-main" >
                   <button onClick={this.handleCloseModal} className="modal-close"><i className="fa fa-times" aria-hidden="true"></i></button>
                  <div className="modal-row col-md-12">
                    <div className="col-md-12">
                    <div className="text-modal">Seleccionaste el siguiente producto:</div>
                    {productListId.map(function (productoId){
                      return <li className="list-modal" key={productoId.name}>{productoId.name}</li>
                    })}
                    </div>
                    <div className="container col-md-8 col-xs-12">
                      <ReactSuperSelect 
                          searchable={true}
                          placeholder="Seleccione un cliente para asignar el producto"
                          optionValueKey="phone"
                          deselectOnSelectedOptionClick={false}
                          optionLabelKey="name"
                          searchPlaceholder="Buscar" 
                          noResultsString= 'No se encontraron coincidencias'
                          dataSource={this.state.testData} 
                          onChange={handlerExample} />

                    </div>
                    <div className="container col-md-4 col-xs-12">
                      <input type="number" className="select-number" value={this.state.quantity} onChange={this.handleQuantityChange}/>
                    </div>
                    <div className="container col-md-12 shop-button">
                      <button onClick={this.addShopCart}>Añadir al carrito</button>
                    </div>
                  </div>
                </ReactModal>

            <div className="table-responsive bs-example widget-shadow">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Nombre</th>
                    <th>Descripción</th>
                    <th>Unidades</th>
                    <th>Precio Unitario</th>
                    <th>Controles</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.productList.map( r => {
                  return <tr key={r.productId}>
                            <td className="name">{r.name}</td>
                            <td className="description">{r.description}</td>
                            <td className="stock">{r.stock}</td>
                            <td className="prize">{Number(r.unitPrice).toFixed(2)}</td>
                            <td className="press">
                              <button onClick={this.onDetail} id={r.productId}><i id={r.productId} className="fa fa-search" title="Detalle de producto"></i></button>
                              <button onClick={this.onModify} id={r.productId}><i id={r.productId} className="fa fa-pencil" title="Modificar producto"></i></button>
                              <button onClick={this.handleOpenModal} id={r.productId}><i id={r.productId} className="fa fa-cart-plus" title="Agregar producto al carrito de compras"></i></button>
                            </td>
                          </tr>
                  })}
                </tbody>  
              </table>
            </div>
          </div>
        </div>
      </div>
        )
    }
}

export default InventarioList;