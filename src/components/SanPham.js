import React, { Component } from 'react'
import { connect } from 'react-redux';

class SanPham extends Component {
  render() {
    let {getDetail, phone} = this.props;
    return (
      <div className='card text-left me-3'>
        <img className='card-img-top' src={phone.hinhAnh} width={170} height={300} alt='true' />
        <div className='card-body'>
            
            <h4 className='card-title'>{phone.tenSP}</h4>
            <button className='btn btn-success' onClick={() => getDetail(phone)}>Xem chi tiết</button>
            <button className='btn btn-warning ms-5' onClick={() =>this.props.themGioHang(phone)}>Thêm vào giỏ</button>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispath) => {
  return {
    themGioHang: (phone) =>{
      let phoneCart = {...phone,soLuong:1};
      dispath({
        type:'THEM_GIO_HANG',
        phoneCart,  
      });
    }
  }
}

export default connect(null, mapDispatchToProps)(SanPham);