import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import defaultproduct from '../images/default_product.png'
import classie from 'classie';
import $ from 'jquery';
import loading from '../images/cargando.gif'
window.jQuery = window.$ = $;

var alerterror, alertsuccess, imagen, productId, image = "";
const packingUnit = "UND";
const brand = "VARROC";
// const heroku = "https://cors-anywhere.herokuapp.com/";
// const produrl = "http://yaxche.mx:8281/";
//const urlbase = "http://216.250.125.239:8281/";
const baseurl = "http://localhost:3000/";
const detailurl = "stock/product/detail";
const modifyurl = "stock/product/modify";
const header = { 'Content-Type': 'application/json' };
const modecors = "request-no-cors";
const companyId = "e9d95960-7803-11e7-bbb0-db0815bb6dd9";
const providerId = "740f0860-7646-11e7-bbb0-db0815bb6dd9";

class Modify extends Component {

    constructor(props) {
        super(props)

        this.state = {
            file: '',
            name: "",
            desc: "",
            detailproduct: "",
            stock: "",
            unitprice: "",
            wholesaleprice: "",
            category: "",
            modifyresponse: "",
            imagePreviewUrl: defaultproduct,
            productId: props.match.params.productId,
            imagen: defaultproduct,
        };

        this.onModify = this.onModify.bind(this);
        this.onTodoChange = this.onTodoChange.bind(this);
        this.onDescChange = this.onDescChange.bind(this);
        this.onStockChange = this.onStockChange.bind(this);
        this.onCategoryChange = this.onCategoryChange.bind(this);
        this.onUnitPriceChange = this.onUnitPriceChange.bind(this);
        this.onWholesaleChange = this.onWholesaleChange.bind(this);
        this._handleImageChange = this._handleImageChange.bind(this);

    }

    onTodoChange(event) {
        event.preventDefault();

        if (this.state.name === null) {
            this.setState({ name: " " });
        } else {
            this.setState({ name: event.target.value });
        }
    }

    onDescChange(event) {
        event.preventDefault();

        if (this.state.desc === null) {
            this.setState({ desc: " " });
        } else {
            this.setState({ desc: event.target.value });
        }

    }

    onStockChange(event) {
        event.preventDefault();

        if (this.state.stock === null) {
            this.setState({ stock: " " });
        } else {
            this.setState({ stock: event.target.value });
        }

    }

    onUnitPriceChange(event) {
        event.preventDefault();

        if (this.state.wholesaleprice === null) {
            this.setState({ unitprice: " " });
        } else {
            this.setState({ unitprice: event.target.value });
        }
    }
    onWholesaleChange(event) {
        event.preventDefault();

        if (this.state.wholesaleprice === null) {
            this.setState({ wholesaleprice: " " });
        } else {
            this.setState({ wholesaleprice: event.target.value });
        }
    }

    onCategoryChange(event) {
        event.preventDefault();

        if (this.state.category === null) {
            this.setState({ category: " " });
        } else {
            this.setState({ category: event.target.value });
        }
    }

    onModify(event) {

        productId = this.props.match.params.productId;
        image = this.state.imagePreviewUrl;

        event.preventDefault();
        fetch(baseurl+modifyurl, {
                method: 'POST',
                mode: modecors,
                headers: header,
                body: JSON.stringify({
                    "companyId": companyId,
                    "productId": productId,
                    "category": this.state.category,
                    "description": this.state.desc,
                    "labels": ["filtros", "afinacion"],
                    "name": this.state.name,
                    "providerId": providerId,
                    "stock": this.state.stock,
                    "unitPrice": this.state.unitprice,
                    "wholesalePrice": this.state.wholesaleprice,
                    "image": image,
                    "itemCode": "",
                    "brand": brand,
                    "packingUnit": packingUnit

                })
            }).then(response => response.json())
            .then(response => {
                this.setState({ modifyresponse: response })
                var modifyresponse = this.state.modifyresponse.resultDescription;
                console.log(modifyresponse)

                if (modifyresponse !== "SUCCESS") {

                    classie.remove(alerterror, 'hideMenu');

                } else {

                    classie.remove(alertsuccess, 'hideMenu');

                }

                this.forceUpdate();

            })
            .catch(err => console.log(err))

    }

    _handleImageChange(e) {
        e.preventDefault();

        let reader = new FileReader();
        let file = e.target.files[0];

        reader.onloadend = () => {
            this.setState({
                file: file,
                imagePreviewUrl: reader.result
            });
        }
        reader.readAsDataURL(file)
    }

    componentDidMount() {

        imagen = this.state.imagePreviewUrl;
        productId = this.props.match.params.productId;

        alerterror = document.getElementById('alert-error');
        alertsuccess = document.getElementById('alert-success');


        fetch(baseurl+detailurl, {
                method: 'POST',
                mode: modecors,
                headers: header,
                body: JSON.stringify({ "companyId": companyId, "productId": productId })
            }).then(response => response.json())
            .then(response => {
                this.setState({ detailproduct: response })
                this.setState({ name: response.name });
                this.setState({ desc: response.description });
                this.setState({ stock: response.stock });
                this.setState({ unitprice: response.unitPrice });

                imagen = this.state.detailproduct.image;

                if (imagen !== "") {
                    this.setState({ imagePreviewUrl: imagen });
                } else {
                    this.setState({ imagePreviewUrl: defaultproduct })
                }

            })
            .catch(err => console.log(err))
    }

    render() {

        productId = this.props.match.params.productId;

        let { imagePreviewUrl } = this.state;
        let $imagePreview = (<img src={defaultproduct} alt="DefaultImage"/>);
        if (imagePreviewUrl) {
            $imagePreview = (<img src={imagePreviewUrl} alt={productId}/>);
        }
        return (
            <div id="page-wrapper">
                <div className="main-page">
                    <div className="container-fluid">
                        <div className="alert alert-success hideMenu" role="alert" id="alert-success">
                            El producto {this.state.detailproduct.name} ha sido actualizado correctamente.
                        </div>
                        <div className="alert alert-danger hideMenu" role="alert" id="alert-error">
                            El producto {this.state.detailproduct.name} no pudo ser actualizado.
                        </div>
                        <div className="alert alert-danger hideMenu" role="alert" id="alert-error">
                            <img src={loading} alt="spinnerloading" />
                            <a className="alert-link">El producto {this.state.detailproduct.name} no pudo ser actualizado.</a>
                        </div>
                        <div className="col-md-12 col-xs-12">
                            <h4 className="sectiontitle">
                                <Link to="/" className="titlelink">Inventario</Link>
                                <i className="fa fa-caret-right" aria-hidden="true"></i>
                                <span>Modificar Producto</span>
                            </h4>
                        </div>
                        <div className="container-product-img col-md-3 col-xs-12">{$imagePreview}
                            <label className="btn-bs-file btn-upload">Seleccionar Imagen
                                <input type="file" onChange={this._handleImageChange}/>
                            </label>
                        </div>
                        <div className="container-product col-md-8 col-xs-12">
                            <div className="container col-md-4 col-xs-12">
                                <label className="control-label">Nombre:</label>
                            </div>
                            <div className="container col-md-6 col-xs-12">
                                <input type="text" className="form-control1" id="" placeholder="" value={this.state.name || ''} onChange={this.onTodoChange}/>
                            </div>
                            <div className="container col-md-4 col-xs-12">
                                <label className="control-label">Descripción:</label>
                            </div>
                            <div className="container col-md-6 col-xs-12">
                                <input type="text" className="form-control1" id="" placeholder="" value={this.state.desc || ''} onChange={this.onDescChange}/>
                            </div>
                            <div className="container col-md-4 col-xs-12">
                                <label className="control-label">Unidades:</label>
                            </div>
                            <div className="container col-md-6 col-xs-12">
                                <input type="number" className="form-control1" id="" placeholder="" value={this.state.stock || ''} onChange={this.onStockChange}/>
                            </div>
                            <div className="container col-md-4 col-xs-12">
                                <label className="control-label">Precio Unitario:</label>
                            </div>
                            <div className="container col-md-6 col-xs-12">
                                <input type="number" className="form-control1" id="" placeholder="" value={this.state.unitprice || ''} onChange={this.onUnitPriceChange}/>
                            </div>
                            <div className="container col-md-4 col-xs-10">
                                <label className="control-label">Precio al Mayoreo:</label>
                            </div>
                            <div className="container col-md-6 col-xs-12">
                                <input type="number" className="form-control1" id="" placeholder="" value={this.state.wholesaleprice || ''} onChange={this.onWholesaleChange}/>
                            </div>
                            <div className="container col-md-10 col-xs-12">
                            </div>
                            <div className="container col-md-4 col-xs-12">
                                <label className="control-label">Categoría:</label>
                            </div>
                            <div className="container col-md-6 col-xs-12">
                                <input type="text" className="form-control1" id="" placeholder="" value={this.state.category || ''} onChange={this.onCategoryChange}/>
                            </div>
                            <div className="container col-md-4 col-xs-12">
                                <label className="control-label"></label>
                            </div>
                            <div className="container container-product-img col-md-5 col-xs-12">
                                <button type="button" onClick={this.onModify}>Modificar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Modify;