import { client } from './';

const url = '/contacts';
var table = 'Printer_CRUD';

export function fetchContacts(){
  return dispatch => {
    dispatch({
      type: 'FETCH_CONTACTS',
      payload: fetch('https://ma520tn9p2.execute-api.us-east-2.amazonaws.com/default/myFirstLambdaFunctionForPrinters',{
        method: 'GET',
        headers:{
            'Content-Type': 'application/json',
            'x-api-key': '3A4ef8N7hG3UjbuARDz994qjLNdV6zM56omEUL89'
        }
      }).then(response => response.json())
    })
  }
}

export function newContact() {
  return dispatch => {
    dispatch({
      type: 'NEW_CONTACT'
    })
  }
}

export function saveContact(contact) {
  var send_data = 'https://q5gsfo2cj9.execute-api.us-east-2.amazonaws.com/default/AddPrinterLambdaFunction?'+'printer_name='+contact.printer_name+'&printer_ip='+contact.printer_ip+'&printer_status='+contact.printer_status;
  return dispatch => {
    return dispatch({
      type: 'SAVE_PRINTER',
      payload: fetch(send_data,{
        headers:{
            'Content-Type': 'application/json',
            'x-api-key': 'EeRMMn1zO1CjTqROPc2Q868Nc0WEfSu32gebp0Cd'
        },
        method: 'POST'
      }).then(response => response.json())
    })
  }
}

export function fetchContact(date) {
  var send_data = 'https://2zrpoqfr5c.execute-api.us-east-2.amazonaws.com/default/FetchOnePrinterLambdaFunction?date='+date;
  return dispatch => {
    return dispatch({
      type: 'FETCH_CONTACT',
      payload: fetch(send_data,{
        method: 'GET',
        headers:{
            'Content-Type': 'application/json',
            'x-api-key': 'TIOdaptLaM28OMktdQ45H4IQXd3x6ea411XO5XJZ'
        }
      }).then(response => response.json())
    })
  }
}

export function updateContact(contact) {
  var send_data = 'https://fx7rtpuhef.execute-api.us-east-2.amazonaws.com/default/UpdatePrinterLambdaFunction?date='+contact.date+'&printer_name='+contact.printer_name+'&printer_ip='+contact.printer_ip+'&printer_status='+contact.printer_status;
  return dispatch => {
    return dispatch({
      type: 'UPDATE_CONTACT',
      payload: fetch(send_data,{
        headers:{
            'Content-Type': 'application/json',
            'x-api-key': '17SHiVjukcNwatOcFFZ47pQUdHB8B5U3ezRAm5r4'
        },
        method: 'PUT'
      }).then(response => response.json())
    })
  }
}

export function deleteContact(date) {
  var send_data = 'https://s5t6r0ozpl.execute-api.us-east-2.amazonaws.com/default/DeletePrinterLambdaFunction?date='+date;
  return dispatch => {
    return dispatch({
      type: 'DELETE_CONTACT',
      payload: fetch(send_data,{
        method: 'DELETE',
        headers:{
            'Content-Type': 'application/json',
            'x-api-key': '7JrM9kXnVE3M504Gljbi52omKQ3949jJ91X75oj6'
        }
      }).then(response => response.json())
    })
  }
}