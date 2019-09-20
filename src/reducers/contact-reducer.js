const defaultState = {
  contacts: [],
  contact: {},
  loading: false,
  errors:{}
}

export default (state=defaultState, action={}) => {
  switch (action.type) {
    case 'FETCH_CONTACTS_FULFILLED': {
      return {
        ...state,
        contacts: action.payload,
        loading: false,
        errors: {}
      }
    }

    case 'FETCH_CONTACTS_PENDING': {
      return {
        ...state,
        loading: true,
        errors: {}
      }
    }

    case 'FETCH_CONTACTS_REJECTED': {
      return {
        ...state,
        loading: false,
        errors: { global: action.payload.message }
      }
    }

    case 'NEW_CONTACT': {
      return {
        ...state,
        contact: {}
      }
    }

    case 'SAVE_CONTACT_PENDING': {
      return {
        ...state,
        loading: true
      }
    }

    case 'SAVE_CONTACT_FULFILLED': {
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
        errors: {},
        loading: false
      }
    }

    case 'SAVE_CONTACT_REJECTED': {
      const data = action.payload;
      // convert feathers error formatting to match client-side error formatting
      const { name, ip, status } = data.errors;
      const errors = { global: data.message, name, ip, status };
      return {
        ...state,
        errors: errors,
        loading: false
      }
    }

    case 'FETCH_CONTACT_PENDING': {
      return {
        ...state,
        loading: true,
        contact: {}
      }
    }

    case 'FETCH_CONTACT_FULFILLED': {
      return {
        ...state,
        contact: action.payload,
        errors: {},
        loading: false
      }
    }

    case 'UPDATE_CONTACT_PENDING': {
      return {
        ...state,
        loading: true
      }
    }

    case 'UPDATE_CONTACT_FULFILLED': {
      const contact = action.payload;
      console.log(action.payload);
      return {
        ...state,
        contacts: state.contacts.map(item => item.date === contact.date ? contact : item),
        errors: {},
        loading: false
      }
    }

    case 'UPDATE_CONTACT_REJECTED': {
      const data = action.payload;
      const { name, ip, status } = data.errors;
      const errors = { global: data.message, name, ip, status };
      return {
        ...state,
        errors: errors,
        loading: false
      }
    }

    case 'DELETE_CONTACT_PENDING': {
      return {
        ...state,
        loading: true
      }
    }

    case 'DELETE_CONTACT_FULFILLED': {
      const date = Number(action.payload);
      return {
        contacts: state.contacts.filter(item => Number(item.date) !== date),
        ...state,
        loading: false
      }
    }

    default:
      return state;
  }
}
