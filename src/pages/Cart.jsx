import React from "react";
import { Link } from "react-router-dom";
import Footer from '../components/Footer'
import HeaderStore from "../components/HeaderStore";
import data from "../data";
import boxGuy from "../imgs/boxguy.png";
import cyanButton from "../imgs/cyanButton.png";
import greyButton from "../imgs/greyButton.png";
import settings from "../settings";
import "../styles/pages/cart.css";

function Cart() {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div>
        <HeaderStore />
      </div>
      <div>
        <div style={{ display: "flex", flexDirection: "collumn" }}>
          <div className="boxGuyContainer" style={{ flex: 1 }}>
            <img
              style={{ height: "300px" }}
              className="boxGuy"
              alt=""
              src={boxGuy}
            ></img>
          </div>
          <div style={{ flex: 5, paddingRight: "150px" }}>
            <div>

            {settings.done ? (

            

            
              <table style={{ width: "100%" }}>
                {data.products.map((i) => (
                  <tr
                    style={{
                      display: "flex",
                    }}
                  >
                    <td style={{ flex: 1, padding: 0 }}>
                      <img
                        style={{ width: "100px" }}
                        src={i.url}
                        alt={i.name}
                      ></img>
                    </td>
                    <td
                      style={{
                        flex: 5,
                        padding: 0,
                        position: "relative",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          margin: "20px",
                        }}
                      >
                        <span className="shirt-name-style">{i.name}</span>
                        <span className="shirt-size-style">
                          Tamanho: {i.sizes}
                        </span>
                      </div>
                    </td>
                    <td style={{ flex: 2, padding: 0, position: "relative" }}>
                      <span className="shirt-price-style">R$: {i.price}</span>
                    </td>
                    <td style={{ flex: 1, padding: 0, position: "relative" }}>
                      <button>
                        <span className="remove-shirt-style">REMOVER</span>
                      </button>
                    </td>
                  </tr>
                ))
              
              }
              </table>
              ): 
                data.comingProduct.map((i) => (
                  <div style={{ width: "100%", paddingLeft: '200px'}}>
                  <img src={i.url} alt={i.name}></img>
                  </div>
                  ))
                
            }
            </div>

            {
              settings.done &&
            <div style={{ marginTop: "20px", display: "flex", float: "right" }}>
              <div className="navButtonContainer">
                <Link to={"/store"}>
                  <img alt="" src={greyButton}></img>
                  <span className="navButtonText">VOLTAR</span>
                </Link>
              </div>
              <div className="navButtonContainer">
                <Link to={"/checkout"}>
                  <img alt="" src={cyanButton}></img>
                  <span className="navButtonText">CHECKOUT</span>
                </Link>
              </div>
            </div>
            }
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Cart;
