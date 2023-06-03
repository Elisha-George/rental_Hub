import React from 'react'
import { Layout } from '../../components/layout/Layout'
import './NewProfile.css'
import avatar from '../../images/ProfileAvatar.avif';
import review from '../../images/review.avif';
import amount from '../../images/Amount.png';
import bidding from '../../images/biding.png';



export const NewProfile = () => {
    return (

        <Layout>

            <section className="profile">
                <div className="container-fluid profileHeadContainer">

                    <div className="row profileBackground">

                        <img src={avatar} alt="" />
                        <h4 className="profileName">
                            Elisha George
                        </h4>
                        <div className="idDetails">
                            <h5 className="profileEmail">
                                elishageorge111@gmail.com
                            </h5>
                            <h5 className="profileCnic">
                                45214-2457987-1
                            </h5>
                        </div>

                        <div className="profileButtons">
                        <button type="button" class="btn_edit btn btn-info">Edit</button>
                        <button type="button" class="btn_logout btn btn-info">Logout</button>
                        </div>




                        <div className="container-fluid dashboardSection">

                            <ul class="nav nav-tabs justify-content-center">
                                <li class="nav-item">
                                    <a class="nav-link active" role='tab' data-toggle="tab" href="#dashboard_">Dashboard</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" role='tab' data-toggle="tab" href="#biddingRequest">Bidding Requests</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" role='tab' data-toggle="tab" href="#reviews">Payment</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" role='tab' data-toggle="tab" href="#listings">Pridict Rent</a>
                                </li>
                            </ul>

                            <div className="tab-content">


                                <div className="row tab-pane active row_dash justify-content-center" id='dashboard_' role='tabpanel'>

                                    <div className="dashsection">
                                        <div className="dashItems" id='bid'>
                                            <div className="totalBids">
                                                <h5>
                                                    Your total Bids
                                                </h5>

                                        

                                                <h3>
                                                    30 Bids
                                                </h3>
                                                
                                                
                                            </div>
                                        </div>
                                        <div className="dashItems" id='req'>
                                            <div className="totalReq">
                                                <h5>
                                                    Your total Reviews
                                                </h5>

                                                <h3>
                                                    40 Reviews
                                                </h3>
                                            </div>
                                        </div>
                                        <div className="dashItems" id='Amt'>
                                            <div className="totalAmt">
                                                <h5>
                                                    Your Amount in wallet
                                                </h5>

                                                <h3>
                                                    Rs .50,000
                                                </h3>
                                            </div>
                                        </div>
                                    </div>



                                </div>

                                <div className="row tab-pane rorow_dash" id='biddingRequest' role='tabpanel'>


                                    <table class="table">
                                        <thead class="thead-dark">
                                            <tr>
                                                <th scope="col">Name</th>
                                                <th scope="col">Email</th>
                                                <th scope="col">Bid Amount</th>
                                                <th scope="col">Status</th>
                                                <th scope="col">Status</th>


                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">Eman</th>
                                                <td>Eman@gmail.com</td>
                                                <td>30,000</td>
                                                <td>
                                                    <button type="button" class="btn btn-outline-success" data-toggle="modal" data-target="#exampleModalCenter">
                                                        Review
                                                    </button></td>
                                                <td><button type="button" class="btn btn-outline-danger" data-toggle="modal" data-target="#exampleModalCenterDelete">
                                                    Delete
                                                </button></td>


                                            </tr>
                                            <tr>
                                                <th scope="row">Unzila</th>
                                                <td>Unzila@gmail.com</td>
                                                <td>50,000</td>
                                                <td>
                                                    <button type="button" class="btn btn-outline-success" data-toggle="modal" data-target="#exampleModalCenter">
                                                        Review
                                                    </button></td>
                                                <td><button type="button" class="btn btn-outline-danger" data-toggle="modal" data-target="#exampleModalCenter">
                                                    Delete
                                                </button></td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Taha</th>
                                                <td>Taha@gmail.com</td>
                                                <td>32,000</td>
                                                <td>
                                                    <button type="button" class="btn btn-outline-success" data-toggle="modal" data-target="#exampleModalCenter">
                                                        Review
                                                    </button></td>
                                                <td><button type="button" class="btn btn-outline-danger" data-toggle="modal" data-target="#exampleModalCenter">
                                                    Delete
                                                </button></td>
                                            </tr>
                                        </tbody>
                                    </table>


{/* Modal Popup Screen For Approval */}
                                    <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                                        <div class="modal-dialog modal-dialog-centered" role="document">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <h4 class="modal-title " id="exampleModalCenterTitle">Bidding Request Details</h4>
                                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                        <span aria-hidden="true">&times;</span>
                                                    </button>
                                                </div>
                                                <div class="modal-body">
                                                    <div className="container">
                                                        <div className="row row_bidDetails">
                                                            <div className="col-md-6">
                                                                <h6 className='bid_detilHead'>Name  : </h6>

                                                            </div>
                                                            <div className="col-md-6">
                                                                <h6>Eman Zulfikar</h6>

                                                            </div>

                                                        </div>

                                                        <div className="row row_bidDetails">
                                                            <div className="col-md-6">
                                                                <h6 className='bid_detilHead'>Email : </h6>

                                                            </div>
                                                            <div className="col-md-6">
                                                                <h6>eman@gmail.com</h6>

                                                            </div>

                                                        </div>

                                                        <div className="row row_bidDetails">
                                                            <div className="col-md-6">
                                                                <h6 className='bid_detilHead'>Price :</h6>

                                                            </div>
                                                            <div className="col-md-6">
                                                                <h6>Rs. 34000</h6>

                                                            </div>

                                                        </div>

                                                        <div className="row row_bidDetails">
                                                            <div className="col-md-6">
                                                                <h6 className='bid_detilHead'>Tour  : </h6>

                                                            </div>
                                                            <div className="col-md-6">
                                                                <h6>12  :00</h6>

                                                            </div>

                                                        </div>
                                                        <div className="row row_bidDetails">
                                                            <div className="col-md-6">
                                                                <h6 className='bid_detilHead'>Property  : </h6>

                                                            </div>
                                                            <div className="col-md-6">
                                                                <h6>Model Colony, Airport</h6>

                                                            </div>

                                                        </div>


                                                    </div>
                                                </div>
                                                <div class="modal-footer">
                                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                                    <button type="button" class="btn btn-success">Approve</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


{/* Modal Popup Screen For Delete*/}
<div class="modal fade" id="exampleModalCenterDelete" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header model_deleteHead">
        <h5 class="modal-title" id="exampleModalLabel">Confirmation !!!</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
       Are you sure to want to delete this bid??
      </div>
      <div class="modal-footer modal_delFooter">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-danger">Yes</button>
      </div>
    </div>
  </div>
</div>




                                </div>
                                <div className="row tab-pane row_dash" id='reviews' role='tabpanel'>

                                    Payment

                                </div>


                                <div className="row tab-pane row_dash" id='listings' role='tabpanel'>

                                    Predict Rent

                                </div>
                            </div>

                        </div>


                    </div>



                </div>
            </section>
        </Layout>

    )
}

