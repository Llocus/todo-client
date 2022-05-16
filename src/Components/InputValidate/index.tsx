import './InputValidate.scss'


export const nameValidate = (value: string) => {   
  if (!value){
    return [false,"Insira um Nome!"]
  } else {
    return [true]
  }
}

export const phoneValidate = (value: string) => {   
  if (!value){
    return [false,"Insira um Telefone!"]
  }
  else if (value.includes('_')){
    return [false,"Telefone invalido!"]
  } else {
    return [true]
  }
}

export const cpfValidate = (value: string) => {   
    if (!value){
      return [false,"Insira um CPF!"]
    } 
    else if (value.includes('_')){
      return [false,"CPF invalido!"]
    } else {
      return [true]
    }
  }

export const emailValidate = (value: string) => {  
  if (!value){
    return [false,"Insira um Email!"]
  } 
  else if (!value.includes("@")) {
    return [false,"Email invalido!"]
  } else {
    return [true]
  }
}