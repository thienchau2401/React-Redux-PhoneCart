import React, { Component } from 'react'

export default class ChiTietSanPham extends Component {
  render() {
    const {sanPhamChiTiet} = this.props;
    return (
      <div className="row mb-5">
        <div className="col-4">
          <br />
          <h3 className="text-center">{sanPhamChiTiet.tenSP}</h3>
          <img
            src={sanPhamChiTiet.hinhAnh}
            width={270}
            height={300}
            alt={sanPhamChiTiet.tenSP}
          />
        </div>
        <div className="col-8">
          <table className="table">
            <thead>
              <tr>
                <td colSpan={2}>
                  <h3>Thông số kỹ thuật</h3>
                </td>
              </tr>
              <tr>
                <td>Màn Hình</td>
                <td>{sanPhamChiTiet.manHinh}</td>
              </tr>
              <tr>
                <td>Hệ điều hành</td>
                <td>{sanPhamChiTiet.heDieuHanh}</td>
              </tr>
              <tr>
                <td>Camera trước</td>
                <td>{sanPhamChiTiet.cameraTruoc}</td>
              </tr>
              <tr>
                <td>Camera sau</td>
                <td>{sanPhamChiTiet.cameraSau}</td>
              </tr>
              <tr>
                <td>RAM</td>
                <td>{sanPhamChiTiet.ram}</td>
              </tr>
              <tr>
                <td>ROM</td>
                <td>{sanPhamChiTiet.rom}</td>
              </tr>
            </thead>
          </table>
        </div>
      </div>
    );
  }
}
