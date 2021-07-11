interface IState { 
  response: {
    name: string,
    sprites:{
      front_default:string,
    }
  }
}

export const INITIAL_STATE: IState = {
  response: {
    name: '',
    sprites: {
      front_default: ''
    }
  }
}

