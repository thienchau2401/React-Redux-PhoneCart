import React, { Component } from 'react'
import SanPham from './SanPham';
import ChiTietSanPham from './ChiTietSanPham';
import Cart from './Cart';
import { connect } from 'react-redux';



class DanhSachSanPham extends Component {
    mangSanPham = [
        { "maSP": 1, "tenSP": "VinSmart Live", "manHinh": "AMOLED, 6.2, Full HD+", "heDieuHanh": "Android 9.0 (Pie)", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 5700000, "hinhAnh": "./img/vsphone.jpg" },
        { "maSP": 2, "tenSP": "Meizu 16Xs", "manHinh": "AMOLED, FHD+ 2232 x 1080 pixels", "heDieuHanh": "Android 9.0 (Pie); Flyme", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 7600000, "hinhAnh": "./img/meizuphone.jpg" },
        { "maSP": 3, "tenSP": "Iphone XS Max", "manHinh": "OLED, 6.5, 1242 x 2688 Pixels", "heDieuHanh": "iOS 12", "cameraSau": "Chính 12 MP & Phụ 12 MP", "cameraTruoc": "7 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 27000000, "hinhAnh": "./img/applephone.jpg" }
      ];
    state = {
        sanPhamChiTiet: { "maSP": 1, "tenSP": "VinSmart Live", "manHinh": "AMOLED, 6.2, Full HD+", "heDieuHanh": "Android 9.0 (Pie)", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 5700000, "hinhAnh": "./img/vsphone.jpg" },
        isShowModal : false,
    }
    getShowModel = () => {
        this.setState({isShowModal:true})
    }
    getItemDetail = (item) => {
        this.setState({
            sanPhamChiTiet:item
        })
    }
  render() {
    let {sanPhamChiTiet} = this.state;
    //this.getItemDetail(this.mangSanPham[2]);
    return (
      <div>
        <button className='btn btn-success my-2 ms-5' onClick={() => this.props.showCart()}>Cart</button>
        <div className='d-flex container mb-3'>
            <SanPham getDetail = {this.getItemDetail} phone = {this.mangSanPham[0]} />
            <SanPham getDetail = {this.getItemDetail} phone = {this.mangSanPham[1]} />
            <SanPham getDetail = {this.getItemDetail} phone = {this.mangSanPham[2]} />
        </div>
        <ChiTietSanPham  sanPhamChiTiet = {sanPhamChiTiet} />
        <Cart />
      </div>
    )
  }
}

const mapDispatchToProps = (dispath) => {
  return {
    showCart: () => {
      dispath({
        type: "SHOW_GIO_HANG",
        onShow: true,
      });
    },
  };
};

export default connect(null, mapDispatchToProps)(DanhSachSanPham);