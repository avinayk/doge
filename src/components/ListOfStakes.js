

import React from 'react'
import slogo from "../assets/images/small-logo.png";
export default function ListOfStakes() {
return (
<React.Fragment>
   <div className="list-stake ms">
      <div className="d-flex justify-content-between">
         <div className="heading-text-stake ms">
            <h2>MsDoge Staking</h2>
            <p>List of stakes below</p>
         </div>
         <div className="">
            <div className="stake-btn">
               <a className="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">Stake</a>
            </div>
         </div>
      </div>
      <div className="row">
         <div className="col-12">
            <table className="stake-list-sel fliter-box w-100 my-4 d-none d-md-block">
               <tr>
                  <td className="p-2">
                     <select>
                        <option>Start date</option>
                        <option>Start date</option>
                        <option>Start date</option>
                     </select>
                  </td>
                  <td className="p-2">
                     <select>
                        <option>Amount of stake</option>
                        <option>Amount of stake</option>
                        <option>Amount of stake</option>
                     </select>
                  </td>
                  <td className="p-2">
                     <select>
                        <option>APY</option>
                        <option>APY</option>
                        <option>APY</option>
                     </select>
                  </td>
                  <td className="p-2">
                     <select>
                        <option>Amount of reward</option>
                        <option>Amount of reward</option>
                        <option>Amount of reward</option>
                     </select>
                  </td>
                  <td className="p-2">
                     <select>
                        <option>Remaining time</option>
                        <option>Remaining time</option>
                        <option>Remaining time</option>
                     </select>
                  </td>
                  <td className="p-2"></td>
               </tr>
               <tr>
                  <td className="p-2">
                     <h5><b>09/10/2021</b></h5>
                  </td>
                  <td className="p-2">
                     <h5><b>1.0 </b> MsDoge</h5>
                  </td>
                  <td className="p-2">
                     <h5><b>0.5%</b></h5>
                  </td>
                  <td className="p-2">
                     <h5>MsDoge</h5>
                  </td>
                  <td className="p-2">
                     <h5><b className="text-read">30d 10:28</b></h5>
                  </td>
                  <td className="p-2"> <button type="button" className="table-btn py-2 px-4">Claim</button></td>
                  <td className="p-2">
                     <a href="#" className="dots">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                           <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                        </svg>
                     </a>
                  </td>
               </tr>
            </table>
            <ul className="stake-list-sel fliter-box d-flex flex-wrap my-4 ls p-0 d-block d-md-none">
               <li className="col mb-3 mb-md-0 me-3">
                  <select>
                     <option>Start date</option>
                     <option>Start date</option>
                     <option>Start date</option>
                  </select>
                  <h5 className="mt-3"><b>09/10/2021</b></h5>
               </li>
               <li className="col mb-3 mb-md-0 me-3 text-center">
                  <select>
                     <option>Amount of stake</option>
                     <option>Amount of stake</option>
                     <option>Amount of stake</option>
                  </select>
                  <h5 className="mt-3"><b>1.0 </b> MsDoge</h5>
               </li>
               <li className="col mb-3 mb-md-0 me-3 text-center">
                  <select>
                     <option>APY</option>
                     <option>APY</option>
                     <option>APY</option>
                  </select>
                  <h5 className="mt-3"><b>0.5%</b></h5>
               </li>
               <li className="col mb-3 mb-md-0 me-3 text-center">
                  <select>
                     <option>Amount of reward</option>
                     <option>Amount of reward</option>
                     <option>Amount of reward</option>
                  </select>
                  <h5 className="mt-3">MsDoge</h5>
               </li>
               <li className="col mb-3 mb-md-0 me-3 text-center">
                  <select>
                     <option>Remaining time</option>
                     <option>Remaining time</option>
                     <option>Remaining time</option>
                  </select>
                  <h5 className="mt-3"><b className="text-read">30d 10:28</b></h5>
               </li>
               <li>
               <button type="button" className="table-btn py-2 px-4">Claim</button>
               </li>
            </ul>
        
         </div>
      </div>
   </div>
   {/* Modal */}
   <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
         <div class="modal-content">
            <div class="modal-body rel">
               <button type="button" class="closebtn" data-bs-dismiss="modal" aria-label="Close">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
                  </svg>
               </button>
               <div className="heading-text-popupm">
                  <h5 className="my-3 text-center ">Transactions</h5>
                  <form action="">
                     <div className="input-bal">
                        <div className="inner-bore p-3">
                           <div className="row">
                              <div className="col-6">
                                 <h4 className="mb-3">Input</h4>
                                 <input type="text" className="input-box" placeholder="0.5"/>
                              </div>
                              <div className="col-6 text-end">
                                 <h4 className="mb-3">Balance: 1.14005 URUS</h4>
                                 <div className="small-logo-photo">
                                    <img src={slogo} alt="logo"/>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="row my-3">
                           <div className="col-md-5">
                              <div className="d-flex align-items-center sel-number-box">
                                 <div class="number me-3 d-flex justify-content-between">
                                    <span class="minus">-</span>
                                    <input type="text" value="1"/>
                                    <span class="plus">+</span>
                                 </div>
                                 <p>Months</p>
                              </div>
                           </div>
                        </div>
                        <div className="row">
                           <div className="col-12">
                              <p className="d-flex mb-5 qu-text">
                              <div className="icon-box me-2 d-flex">
                                 <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                 </svg>
                              </div>
                              You can stake from 1 month to 7 years</p>
                              <div className="apy-box rel px-3 py-4 text-center">
                                 <h4 className="green-box">0.5% APY</h4>
                                 <p>The APY is calculated by multiplying the amount of months staked with 0.5. Maximum of 20% APY. Please note that cancelling the stake early will penalize you. Refer to our documentation: <a href="#" className="click-btn">Click Here</a> </p>
                              </div>
                              <button className="mt-3 approve-btn text-white text-center py-4 w-100">Approve 0.5 URUS</button>
                           </div>
                        </div>
                     </div>
                  </form>
               </div>
            </div>
         </div>
      </div>
   </div>
</React.Fragment>
)
}

