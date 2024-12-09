package aula3info;

import java.util.Calendar;

public class Cliente {
    
    private int idCliente;
    private String nome;
    private String cpf;
    private String rg;
    private Calendar dtaNascimento;

    /**
     * @return the idCliente
     */
    public int getIdCliente() {
        return idCliente;
    }

    /**
     * @param idCliente the idCliente to set
     */
    public void setIdCliente(int idCliente) {
        this.idCliente = idCliente;
    }

    /**
     * @return the nome
     */
    public String getNome() {
        return nome;
    }

    /**
     * @param nome the nome to set
     */
    public void setNome(String nome) {
        this.nome = nome;
    }

    /**
     * @return the cpf
     */
    public String getCpf() {
        return cpf;
    }

    /**
     * @param cpf the cpf to set
     */
    public void setCpf(String cpf) {
        this.cpf = cpf;
    }

    /**
     * @return the rg
     */
    public String getRg() {
        return rg;
    }

    /**
     * @param rg the rg to set
     */
    public void setRg(String rg) {
        this.rg = rg;
    }

    /**
     * @return the dtaNascimento
     */
    public Calendar getDtaNascimento() {
        return dtaNascimento;
    }

    /**
     * @param dtaNascimento the dtaNascimento to set
     */
    public void setDtaNascimento(Calendar dtaNascimento) {
        this.dtaNascimento = dtaNascimento;
    }
}
