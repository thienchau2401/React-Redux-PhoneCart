import React, { Component } from 'react'
import { connect } from 'react-redux';
class Cart extends Component {  
  render() {
    let countItem = this.props.gioHang.reduce((prev,next) => {
      return prev + next.soLuong
    },0);
    let totalPrice = this.props.gioHang.reduce((prev,next) => {
      return prev + next.soLuong*next.giaBan;
    },0);
    totalPrice = totalPrice.toLocaleString('it-IT', {style : 'currency', currency : 'VND'});
    return (
      <div className="modal" tabIndex={-1} style={{display:this.props.onShow === true?'block':'none'}}>
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">My Cart{(countItem ===0)?'':`(${countItem})`}</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={() => this.props.hideCart()}
              />
            </div>
            <div className="modal-body">
              <table className='table table-bordered border border-danger'>
                <thead>
                  <tr>
                    <th>Mã sản phẩm</th>
                    <th>Hình ảnh</th>
                    <th>Tên sản phẩm</th>
                    <th>Số lượng</th>
                    <th>Đơn giá</th>
                    <th>Thành tiền</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    
                    this.props.gioHang.map((spGioHang,index) => {
                      return <tr key={index}>
                        <td>{spGioHang.maSP}</td>
                        <td><img src={spGioHang.hinhAnh} width={50} height={50} alt=''/></td>
                        <td>{spGioHang.tenSP}</td>
                        <td><button className='btn btn-primary' onClick={() => this.props.insertItem(spGioHang.maSP)}>+</button> {spGioHang.soLuong} <button className='btn btn-primary' onClick={() => this.props.removeItem(spGioHang.maSP)}>-</button></td>
                        <td>{spGioHang.giaBan}</td>
                        <td>{spGioHang.soLuong * spGioHang.giaBan}</td>
                      </tr>
                    })
                  }
                </tbody>
              </table>
              <h5 className='text-end'>Tổng số tiền:{totalPrice}</h5>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                onClick={() => this.props.hideCart()}
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Order
              </button>
              <button type="button" className="btn btn-danger" onClick={() => this.props.emptyCart()}>
                Empty cart
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {gioHang:state.GioHangReducer.gioHang,
  onShow:state.GioHangReducer.onShow}
};

const mapDispatchToProps = (dispath) => {
  return {
    hideCart: () => {
      dispath({
        type: "HIDE_GIO_HANG",
        onShow: false,
      });
    },
    insertItem:(idItem) => {
      dispath({
        type: "TANG",
        id:idItem,
      })
    },
    removeItem:(idItem) => {
      dispath({
        type: "GIAM",
        id:idItem,
      })
    },
    emptyCart:() => {
      dispath({
        type: "EMPTY",
      })
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps) (Cart);