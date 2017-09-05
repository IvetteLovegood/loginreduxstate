import React, { Component } from 'react';
import defaultproduct from '../images/default_product.png'
import { Link } from 'react-router-dom'

// const heroku = "https://cors-anywhere.herokuapp.com/";
// const produrl = "http://yaxche.mx:8281/";

const baseurl = "http://localhost:3000/";
const detailurl = "stock/product/detail";
const header = { 'Content-Type': 'application/json' };
const modecors = "request-no-cors";
const companyId = "e9d95960-7803-11e7-bbb0-db0815bb6dd9";

var data, productId, imagen, clickedId = "";

class Detail extends Component {

    constructor(props) {
        super(props)
        
        this.state = {productId: "", detailproduct: {}, provider: {}, extendedPrices: [], imagen: defaultproduct }
        
        this.onModify = this.onModify.bind(this);
    }

    onModify(event) {
        event.preventDefault();
        clickedId = event.target.id;
        this.setState({ productId: event.target.id })
        this.props.history.push('/modify/' + clickedId)
    }

    componentDidMount() {

        productId = this.props.match.params.productId;
        data = JSON.stringify({ "companyId": companyId, "productId": productId });

        fetch(baseurl+detailurl, { method: 'POST', mode: modecors, headers: header, body: data })
            .then(response => response.json())
            .then(response => {
                this.setState({ detailproduct: response });
                this.setState({ provider: response.providerDTO });
                this.setState({ extendedPrices: response.extendedPrices });
                console.log(response);
                imagen = this.state.detailproduct.image;
                if (imagen !== "") {
                    this.setState({ imagen: response.image })
                } else {
                    this.setState({ imagen: defaultproduct })
                }
            })
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div id="page-wrapper">
                <div className="main-page">
                    <div className="container-fluid">
                        <h4 className="sectiontitle">
                            <Link to="/" className="titlelink">Inventario</Link>
                            <i className="fa fa-caret-right" aria-hidden="true"></i>
                            <span>Detalle de Producto</span>
                        </h4>
                        <div className="container-product-img col-md-3 col-xs-12">
                            <img src={this.state.imagen} alt="product" />
                            <button onClick={this.onModify} id={this.state.detailproduct.productId} className="btn-bs-file btn-upload">
                                <i id={this.state.detailproduct.productId} className="fa fa-pencil"></i> Modificar</button>
                        </div>
                        <div className="container-product col-md-8 col-xs-12"></div>
                        <div className="container-product col-md-8 col-xs-12">
                            <h4 className="title3">{this.state.detailproduct.name}</h4>
                            <ul>
                                <li>
                                    <label>Descripción:</label>
                                    <span>{this.state.detailproduct.description}</span>
                                </li>
                                <li>
                                    <label>Unidades en Tienda:</label>
                                    <span>{this.state.detailproduct.stock}</span>
                                </li>
                                <li>
                                    <label>Precio Unitario:</label>
                                    <span>{this.state.detailproduct.unitPrice}</span>
                                </li>
                                <li>
                                    <h4 className="title4">Proveedor</h4>
                                </li>
                                <li>
                                    <label>CIF:</label>
                                    <span>{this.state.provider.cif}</span>
                                </li>
                                <li>
                                    <label>Nombre:</label>
                                    <span>{this.state.provider.name}</span>
                                </li>
                                <li>
                                    <label>Correo electrónico:</label>
                                    <span>{this.state.provider.email}</span>
                                </li>
                                <li>
                                    <label>Teléfono:</label>
                                    <span>{this.state.provider.phone}</span>
                                </li>
                            </ul>
                            <div className="table-responsive bs-example widget-shadow">
                                <table className="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th>Nombre</th>
                                            <th>Descripción</th>
                                            <th>Unidades</th>
                                            <th>Precio Unitario</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.state.extendedPrices.map( r => { return(
                                        <tr key={r.code}>
                                            <td className="stock">{r.code}</td>
                                            <td className="stock">{r.name}</td>
                                            <td className="stock">{r.description}</td>
                                            <td className="stock">{r.value}</td>
                                        </tr>
                                        ); })}
                                    </tbody>
                                </table>
                                <div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Detail;