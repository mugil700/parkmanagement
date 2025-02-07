import React from 'react'
import moy from "../Assets/moy.jpg"

export default  function Payment() {
  return (
    <div>
        <div id='dd' >
      <img src={moy} alt="" width="100%" height="100%" />
      </div>
        <br/>
        <br/>
        <br/>
        <br/>
        
        <div class="container p-0">
        <div class="card px-4">
            <p class="h8 py-3">Payment Details</p>
            <div class="row gx-3">
                <div class="col-12">
                    <div class="d-flex flex-column">
                        <p class="text mb-1">User Name</p>
                        <input class="form-control mb-3" type="text" placeholder="Name" value="Barry Allen"/>
                    </div>
                </div>
                <div class="col-12">
                    <div class="d-flex flex-column">
                        <p class="text mb-1">Card Number</p>
                        <input class="form-control mb-3" type="text" placeholder="1234 5678 435678"/>
                    </div>
                </div>
                <div class="col-6">
                    <div class="d-flex flex-column">
                        <p class="text mb-1">Expiry</p>
                        <input class="form-control mb-3" type="text" placeholder="MM/YYYY"/>
                    </div>
                </div>
                <div class="col-6">
                    <div class="d-flex flex-column">
                        <p class="text mb-1">CVV/CVC</p>
                        <input class="form-control mb-3 pt-2 " type="password" placeholder="***"/>
                    </div>
                </div>
                <div class="col-12">
                    <div class="btn btn-primary mb-3">
                        <span class="ps-3">Pay $243</span>
                        <span class="fas fa-arrow-right"></span>
                    </div>
                </div>
                 <div class="col-12">
                    <div class="btn btn-primary mb-3">
                        <span class="ps-3">Cancel</span>
                        <span class="fas fa-arrow-right"></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

