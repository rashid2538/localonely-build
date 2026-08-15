import{N as e,O as t,T as n,_ as r,b as i,c as a,g as o,k as s,m as c,p as l,r as u,y as d}from"./index-D58LqDyp.js";import{t as f}from"./FilePicker-B4RGR7Q6.js";import{n as p,t as m}from"./pdfprint-Cfw-bKTj.js";var h={class:`stack`},g={class:`field`},_={class:`row`},v=[`disabled`],y={key:0,class:`error`},b={key:1,class:`stack`},x=[`srcdoc`],S={key:0,class:`note`},C=`<!doctype html>
<html lang="en">
<head><meta charset="utf-8"><title>Sample invoice</title></head>
<body>
  <h1>Invoice #1042</h1>
  <p>Thank you for your order. This sample renders to PDF via your browser’s print engine.</p>
  <table>
    <tr><th>Item</th><th>Qty</th><th>Price</th></tr>
    <tr><td>Widget</td><td>2</td><td>$19.99</td></tr>
    <tr><td>Gadget</td><td>1</td><td>$9.50</td></tr>
  </table>
  <p><strong>Total: $49.48</strong></p>
</body>
</html>`,w={__name:`HtmlToPdf`,setup(w){let T=s(C),E=s([]),D=s(``),O=s(null),k=s(!1),A=s(!1),j=l(()=>p(m(T.value),{title:`HTML to PDF`,base:u(`/`)})),M=l(()=>T.value.trim().length>0);function N(){D.value=``;let e=E.value[0];if(!e)return;let t=new FileReader;t.onload=()=>{T.value=String(t.result)},t.onerror=()=>{D.value=`✗ Could not read that HTML file`},t.readAsText(e)}function P(){let e=O.value?.contentWindow;e&&(e.focus(),e.print(),A.value=!0)}return(s,l)=>(n(),r(`div`,h,[c(`label`,g,[l[3]||=d(`HTML `,-1),t(c(`textarea`,{"onUpdate:modelValue":l[0]||=e=>T.value=e,class:`input ta mono`,rows:`8`,spellcheck:`false`,placeholder:`Paste HTML here…`},null,512),[[a,T.value]])]),c(`div`,_,[c(`button`,{class:`btn btn-primary`,disabled:!M.value,onClick:P},e(A.value?`Open print dialog again`:`Render & download PDF`),9,v),i(f,{accept:`.html,.htm,text/html`,multiple:!1,label:`…or open an .html file`,onFiles:l[1]||=e=>{E.value=e,N()}})]),D.value?(n(),r(`p`,y,e(D.value),1)):o(``,!0),M.value?(n(),r(`div`,b,[c(`iframe`,{ref_key:`frame`,ref:O,srcdoc:j.value,class:`pdf-preview`,onLoad:l[2]||=e=>k.value=!0},null,40,x),A.value?(n(),r(`p`,S,[...l[4]||=[d(`The print dialog opened — choose `,-1),c(`strong`,null,`“Save as PDF”`,-1),d(` as the destination to save the file.`,-1)]])):o(``,!0)])):o(``,!0),l[5]||=c(`p`,{class:`note`},`Renders the HTML with your browser’s own engine, then opens the print dialog for PDF. Text and basic layout are preserved (good for invoices, reports, letters); it is not a pixel-perfect HTML-to-PDF round-trip. Everything happens locally — nothing is uploaded.`,-1)]))}};export{w as default};