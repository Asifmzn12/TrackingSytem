
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import {RiSearchLine, RiFilterLine} from "react-icons/ri"
import { MdOutlineAssignmentInd,MdOutlineCreate} from "react-icons/md";
import { IoPrintOutline } from "react-icons/io5";


import { IoCreateOutline } from "react-icons/io5";

import {CiFileOn,CiDeliveryTruck} from 'react-icons/ci'



function Tracking() {
  return (
    <div className="main">
      <div className="container-fluid  py-1">
        <div className="heading mb-4">
          <h1 className="shadow-lg text-center py-3 text-muted fw-bold">Vechile Tracking Sytems</h1>
        </div>
        <div className="row justify-content-between ">
          <div className="col-3">
            <Form className='card shadow-lg p-4 rounded'>
              <Form.Group className="mb-3 row" controlId="formBasicEmail">
                <Form.Label className="col-5 fw-bold">Status:</Form.Label>
                <div className="col-7 rounded position-relative">
                  <Form.Control type="text" placeholder="" className='rounded' />
                 <RiSearchLine  className='position-absolute filtericon '/> 
                </div>
              </Form.Group>

              <Form.Group className="mb-3 row" controlId="formBasicPassword">
                <Form.Label className="col-5 fw-bold">Product:</Form.Label>
                <div className="col-7">
                  <Form.Control type="text" placeholder="" />
                </div>
              </Form.Group>
              <Form.Group className="mb-3 row" controlId="formBasicPassword">
                <Form.Label className="col-5 fw-bold">Parking Number:</Form.Label>
                <div className="col-7">
                  <Form.Control type="text" placeholder="" />
                </div>
              </Form.Group> <Form.Group className="mb-3 row" controlId="formBasicPassword">
                <Form.Label className="col-5 fw-bold">Vechile Number:</Form.Label>
                <div className="col-7">
                  <Form.Control type="text" placeholder="" />
                </div>
              </Form.Group>



              <div className="mb-3 row ">
                <div className="offset-5 col-7">
                <Button variant="primary" type="submit" className='w-100 btn  '>
                <RiFilterLine className='icon' /> Filter 
              </Button>
                </div>
              </div>
            </Form>




          </div>
          <div className="col d-flex ">
            <Card className='d-flex w-100 shadow-lg rounded'>
              <Card.Body>
                <Card.Title className='text-center fw-bold text-muted'>Vechile Option</Card.Title>
                <hr></hr>
                <div className='my-2 d-flex flex-column gap-3 mt-5 px-3'>
                <Button variant="primary" type="submit" className='w-100  '>
                <CiFileOn  className='icon' /> Update Licence 
              </Button>
              <Button variant="primary" type="submit" className='w-100'>
              <IoCreateOutline className='icon' /> Create TV/Vechile Master 
            </Button>
                </div>



              </Card.Body>
            </Card>


          </div>
          <div className="col d-flex ">
            <Card className='d-flex w-100 shadow-lg rounded'>
              <Card.Body>
                <Card.Title className='text-center fw-bold text-muted'>Customer Assignment</Card.Title>
                <hr></hr>
                <div className='my-2 d-flex flex-column gap-3 mt-5 px-3'>
                <Button variant="primary" type="submit" className='w-100  '>
                <MdOutlineAssignmentInd className='icon' /> Assign Customer 
              </Button>
            
                </div>



              </Card.Body>
            </Card>


          </div>
          <div className="col d-flex ">
            <Card className='d-flex w-100 shadow-lg rounded'>
              <Card.Body>
                <Card.Title className='text-center fw-bold text-muted'>Create/Fetch SO</Card.Title>
                <hr></hr>
                <div className='my-2 d-flex flex-column gap-3 mt-5 px-3'>
                <Button variant="primary" type="submit" className='w-100 '>
                <IoPrintOutline className='icon' /> Fetch SO 
              </Button>
              <Button variant="primary" type="submit" className='w-100  '>
              <MdOutlineCreate className='icon' /> Create SO 
            </Button>
                </div>



              </Card.Body>
            </Card>


          </div>
          <div className="col d-flex ">
            <Card className='d-flex w-100 shadow-lg rounded'>
              <Card.Body>
                <Card.Title className='text-center fw-bold text-muted'>Create Delivery/Shipment</Card.Title>
                <hr></hr>
                <div className='my-2 d-flex flex-column gap-3 mt-5 px-3'>
                <Button variant="primary" type="submit" className='w-100  '>
                <CiDeliveryTruck className='icon' /> Delevery 
              </Button>
              <Button variant="primary" type="submit" className='w-100  '>
              <RiFilterLine className='icon' /> Shipment 
            </Button>
            <Button variant="primary" type="submit" className='w-100  '>
            <IoPrintOutline className='icon' /> Print Lan 
          </Button>
                </div>



              </Card.Body>
            </Card>


          </div>



        </div>


        <div className='tablebox mt-4'>
        <div className="overflow-auto">
        <div className="table-responsive">
            <Table  bordered hover>
              <thead className='primary'> 
                <tr>
                  <th>Serial No</th>
                  <th>#</th>
                  {Array.from({ length: 12 }).map((_, index) => (
                    <th key={index}>Date {index}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[1, 2, 3, 4, 5, 6, 7].map((serialNo, rowIndex) => (
                  <tr key={rowIndex}>
                    <td>{serialNo}</td>
                    <td><input type="checkbox" className='checkbox' /></td>
                    {Array.from({ length: 12 }).map((_, index) => (
                      <td key={index}>Fetch Table Data Here {index}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>
      </div>
      
      
      
      



      </div>

    </div>
  )
}

export default Tracking
