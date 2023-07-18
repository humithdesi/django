import { Injectable } from '@angular/core';
import { titleHome } from '../../homepagtitle';

@Injectable({
  providedIn: 'root'
})
export class TitleService {
homepage_PC:titleHome[]=[
{  title:"THIẾT KẾ, THI CÔNG BẢNG HIỆU",
  catalogy:"BẢNG HIỆU QUẢNG CÁO",
  describe:"Bảng hiệu quảng cáo là một phần không thể thiếu trong chiến lược quảng bá thương hiệu của bạn. Với dịch vụ thiết kế và sản xuất bảng hiệu quảng cáo chuyên nghiệp của chúng tôi, bạn sẽ được tư vấn và hỗ trợ để tạo ra một bảng hiệu độc đáo và thu hút khách hàng. Chúng tôi cam kết mang lại cho bạn một sản phẩm bảng hiệu quảng cáo chất lượng và đẳng cấp để thể hiện sự chuyên nghiệp của thương hiệu của bạn.",
  backgroundVideo:"https://storage.cloud.google.com/cloudquangcao/videoquangcao/filevideo.mp4"},
  {  title:"12312321312",
  catalogy:"IN ẤN",
  describe:"",
  backgroundVideo:"https://storage.cloud.google.com/cloudquangcao/videoquangcao/bongtoikhuat.webm"},
  {  title:"123123213rrrrrrrrr12",
  catalogy:"PHẦN MỀM QUẢNG CÁO",
  describe:"",
  backgroundVideo:"https://storage.cloud.google.com/cloudquangcao/videoquangcao/city.mp4"}
]



homepage_MoBi:titleHome[]=[
  {  title:"THIẾT KẾ, THI CÔNG BẢNG HIỆU",
    catalogy:"BẢNG HIỆU QUẢNG CÁO",
    describe:"Bảng hiệu quảng cáo là một phần không thể thiếu trong chiến lược quảng bá thương hiệu của bạn. Với dịch vụ thiết kế và sản xuất bảng hiệu quảng cáo chuyên nghiệp của chúng tôi, bạn sẽ được tư vấn và hỗ trợ để tạo ra một bảng hiệu độc đáo và thu hút khách hàng. Chúng tôi cam kết mang lại cho bạn một sản phẩm bảng hiệu quảng cáo chất lượng và đẳng cấp để thể hiện sự chuyên nghiệp của thương hiệu của bạn.",
    backgroundVideo:"https://storage.cloud.google.com/cloudquangcao/videoquangcao/VideoMobi1.webm"},
    {  title:"12312321312",
    catalogy:"IN ẤN",
    describe:"",
    backgroundVideo:"https://storage.cloud.google.com/cloudquangcao/videoquangcao/bongtoikhuat.webm"},
    {  title:"123123213rrrrrrrrr12",
    catalogy:"PHẦN MỀM QUẢNG CÁO",
    describe:"",
    backgroundVideo:"https://storage.cloud.google.com/cloudquangcao/videoquangcao/city.mp4"}
  ]
getHomepage_PC(){
  return this.homepage_PC
}
getHomepage_MoBi(){
  return this.homepage_MoBi
}
  constructor() { }
}
