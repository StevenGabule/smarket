import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {listMyOrders} from "../store/actions/order.action";
import Loader from "../utils/Loader";
import Message from "../utils/Message";
import {Button, Table} from "react-bootstrap";
import {LinkContainer} from 'react-router-bootstrap'

function MyOrderPage({history}) {
  const dispatch = useDispatch()
  const {
    orderMyList: { loading, error, orders},
    userLogin: { userInfo}
  } = useSelector(state => state)

  useEffect(() => {
    if (!userInfo) {
      history.push('/login')
    } else {
      dispatch(listMyOrders())
    }
  }, [dispatch, history, userInfo]);


  return (
    <div>
      <h3>My Orders</h3>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant={'danger'}>{error}</Message>
      ) : (
        <Table>
          <thead>
          <tr>
            <th>ID</th>
            <th>Date</th>
            <th>Total</th>
            <th>Paid</th>
            <th />
          </tr>
          </thead>
          <tbody>
          {orders.map(order => (
            <tr>
              <td>{order._id}</td>
              <td>{order.createdAt?.substring(0,10)}</td>
              <td>{order.totalPrice.toFixed(2)}</td>
              <td>{order.isPaid ? (
                order.paidAt?.substring(0,10)) : (
                <i className={'fas fa-times'} style={{color:'red'}} />
              )}</td>
              <td>
                <LinkContainer to={`/order/${order._id}`}>
                  <Button variant="light" size={'sm'}>Details</Button>
                </LinkContainer>
              </td>
            </tr>
          ))}
          </tbody>
        </Table>
      )}
    </div>
  )
}

export default MyOrderPage;
