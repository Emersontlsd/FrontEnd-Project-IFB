import Pessoa from "./Pessoa.mjs";
import Titulo from "./Titulo.mjs";

function validarCPF(cpf) {
  if (!cpf) return false;
  cpf = cpf.replace(/[^\d]+/g, ""); // remove pontos e traços
  if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) return false;

  let soma = 0;
  for (let i = 0; i < 9; i++) soma += parseInt(cpf.charAt(i)) * (10 - i);
  let resto = (soma * 10) % 11;
  if (resto === 10) resto = 0;
  if (resto !== parseInt(cpf.charAt(9))) return false;

  soma = 0;
  for (let i = 0; i < 10; i++) soma += parseInt(cpf.charAt(i)) * (11 - i);
  resto = (soma * 10) % 11;
  if (resto === 10) resto = 0;
  if (resto !== parseInt(cpf.charAt(10))) return false;

  return true;
}

export default class PF extends Pessoa {
  #cpf;
  #titulo;
  #dataNascimento;

  

  setCPF(cpf) {
    if (validarCPF(cpf)) {
      this.#cpf = cpf;
      return true;
    }
    return false;
  }

  getCPF() {
    return this.#cpf;
  }

  setTitulo(titulo) {
    if (titulo instanceof Titulo) {
      this.#titulo = titulo;
      titulo.setPF(this);
      return true;
    }
    return false;
  }

  getTitulo() {
    return this.#titulo;
  }

  setDataNascimento(data) {
    this.#dataNascimento = data;
  }

  getDataNascimento() {
    return this.#dataNascimento;
  }
}