import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  districts =[

    {
      id:1,
      title:"Trivandrum",
      image:"https://in.images.search.yahoo.com/images/view;_ylt=AwrPo9xu_nNl2_ofr2W9HAx.;_ylu=c2VjA3NyBHNsawNpbWcEb2lkA2RkZDJmMGYwNzIxMDRkMmFmOGU1OTA5YWI4NjI0MTcyBGdwb3MDNQRpdANiaW5n?back=https%3A%2F%2Fin.images.search.yahoo.com%2Fsearch%2Fimages%3Fp%3Dtrivandrum%2Bdistrict%26norw%3D1%26ei%3DUTF-8%26type%3DE211IN826G0%26fr%3Dmcafee%26fr2%3Dsp-qrw-corr-top%26tab%3Dorganic%26ri%3D5&w=600&h=394&imgurl=www.visittnt.com%2Fblog%2Fwp-content%2Fuploads%2F2018%2F06%2FTrivandrum-1.jpg&rurl=https%3A%2F%2Fwww.visittnt.com%2Fblog%2Fcomplete-travel-guide-trivandrum-kerala%2F&size=72.3KB&p=trivandrum+district&oid=ddd2f0f072104d2af8e5909ab8624172&fr2=sp-qrw-corr-top&fr=mcafee&tt=Complete+Travel+Guide+to+Trivandrum%2C+Kerala+-+History%2C+Tourist+Places+...&b=0&ni=160&no=5&ts=&tab=organic&norw=1&sigr=2XnD8ugVocnb&sigb=EUtYxIGYCtC3&sigi=nS8uBiFuD.x6&sigt=ziChMHmaM_EV&.crumb=Q.nEefWq3Ub&fr=mcafee&fr2=sp-qrw-corr-top&norw=1&type=E211IN826G0",
      description:"Trivandrum is the 1st district of Kerala"
    },

    {
      id:2,
      title:"Ernakulam",
      image:"https://in.images.search.yahoo.com/images/view;_ylt=AwrPo9zY_XNlSnYfWUW9HAx.;_ylu=c2VjA3NyBHNsawNpbWcEb2lkAzc0MjI2YTZhMmM2ZmJhZDIzMzAxZmYwZDFkYjVlNzBhBGdwb3MDMTgEaXQDYmluZw--?back=https%3A%2F%2Fin.images.search.yahoo.com%2Fsearch%2Fimages%3Fp%3Dkochi%2Bmetro%26type%3DE211IN826G0%26fr%3Dmcafee%26fr2%3Dpiv-web%26tab%3Dorganic%26ri%3D18&w=647&h=404&imgurl=akm-img-a-in.tosshub.com%2Findiatoday%2Fimages%2Fstory%2F201706%2Fkochi-metro-647_061717040422.jpg&rurl=https%3A%2F%2Fwww.indiatoday.in%2Feducation-today%2Fgk-current-affairs%2Fstory%2Fkochi-metro-983256-2017-06-17&size=51.8KB&p=kochi+metro&oid=74226a6a2c6fbad23301ff0d1db5e70a&fr2=piv-web&fr=mcafee&tt=Kochi+Metro+flagged+off+today%3A+Six+things+to+lookout+for+in+the+Metro+...&b=0&ni=21&no=18&ts=&tab=organic&sigr=YCnShgwRDlwM&sigb=fUKlZM5fzvYh&sigi=45SXX5MRO5A2&sigt=eGwvDQSl7lDo&.crumb=Q.nEefWq3Ub&fr=mcafee&fr2=piv-web&type=E211IN826G0",
      description:"Ernakulam is the 5th district of Kerala"
    },

    {
      id:3,
      title:"Kollam",
      image:"https://in.images.search.yahoo.com/images/view;_ylt=AwrPo9xEC3RlAX8gDou9HAx.;_ylu=c2VjA3NyBHNsawNpbWcEb2lkAzU0NjgyY2Q4NGNmZGI0ODUyNTdiODk1ZjU1NDMwNzZkBGdwb3MDMTcEaXQDYmluZw--?back=https%3A%2F%2Fin.images.search.yahoo.com%2Fsearch%2Fimages%3Fp%3Dkollam%2Bdistrict%2Bimages%26type%3DE211IN826G0%26fr%3Dmcafee%26fr2%3Dpiv-web%26tab%3Dorganic%26ri%3D17&w=1000&h=749&imgurl=1.bp.blogspot.com%2F-pYthnVW5ESM%2FTpFtbBWZB0I%2FAAAAAAAAAhI%2F5g4ACQZPrU0%2Fs1600%2FKollam.jpg&rurl=https%3A%2F%2Fkeralatheeram.blogspot.com%2F2011%2F10%2Fkollam-beach.html&size=681.3KB&p=kollam+district+images&oid=54682cd84cfdb485257b895f5543076d&fr2=piv-web&fr=mcafee&tt=Keralatheeram.com%3A+Kollam+Beach&b=0&ni=21&no=17&ts=&tab=organic&sigr=lBmbo1GUWCVp&sigb=IBxWiIlrHurO&sigi=2Pi9TCYQlFpH&sigt=Q41U0gJFJBlk&.crumb=Q.nEefWq3Ub&fr=mcafee&fr2=piv-web&type=E211IN826G0",
      description:"Kollam is the clean 3rd district of Kerala."
    },

    {
      id:4,
      title:"Kottayam",
      image:"https://in.images.search.yahoo.com/images/view;_ylt=AwrPqFs8_nNlWR4gY0u9HAx.;_ylu=c2VjA3NyBHNsawNpbWcEb2lkAzRiNjk0NWZlMDFkMGVjZWQ0ZWJlZDkxNzAxZmFiMDY1BGdwb3MDMjAEaXQDYmluZw--?back=https%3A%2F%2Fin.images.search.yahoo.com%2Fsearch%2Fimages%3Fp%3Dkottayam%2Bdistrict%26ei%3DUTF-8%26type%3DE211IN826G0%26fr%3Dmcafee%26fr2%3Dsa-gp-search%26tab%3Dorganic%26ri%3D20&w=800&h=476&imgurl=townplanning.kerala.gov.in%2Fwp-content%2Fuploads%2F2018%2F12%2FKottayam_district.jpg&rurl=http%3A%2F%2Ftownplanning.kerala.gov.in%2F2018%2F12%2F04%2Fkottayam%2F&size=43.3KB&p=kottayam+district&oid=4b6945fe01d0eced4ebed91701fab065&fr2=sa-gp-search&fr=mcafee&tt=Kottayam+%E2%80%93+Department+of+Town+%26+Country+Planning&b=0&ni=160&no=20&ts=&tab=organic&sigr=DfDY9LwDyeOy&sigb=L46svcT0hp7X&sigi=w5x_kTKKa41l&sigt=1LcYDoUfBz_P&.crumb=Q.nEefWq3Ub&fr=mcafee&fr2=sa-gp-search&type=E211IN826G0",
      description:"Kottayam is the 4th district of Kerala"
    }
    ]
}
