package com.higradius;

public class Response {
	
	 private String customer_name;
	 private String customer_number;
	 private String invoice_number;
	 private String invoice_amount;
	 private String due_date;
	 private String predicted_payment_date;
	 private String notes;
	
 public String getCustomer_name() {
		return customer_name;
	}

	public void setCustomer_name(String customer_name) {
		this.customer_name = customer_name;
	}

	public String getCustomer_number() {
		return customer_number;
	}

	public void setCustomer_number(String customer_number) {
		this.customer_number = customer_number;
	}

	public String getInvoice_number() {
		return invoice_number;
	}

	public void setInvoice_number(String invoice_number) {
		this.invoice_number = invoice_number;
	}

	public String getInvoice_amount() {
		return invoice_amount;
	}

	public void setInvoice_amount(String invoice_amount) {
		this.invoice_amount = invoice_amount;
	}

	public String getDue_date() {
		return due_date;
	}

	public void setDue_date(String due_date) {
		this.due_date = due_date;
	}

	public String getPredicted_payment_date() {
		return predicted_payment_date;
	}

	public void setPredicted_payment_date(String predicted_payment_date) {
		this.predicted_payment_date = predicted_payment_date;
	}

	public String getNotes() {
		return notes;
	}

	public void setNotes(String notes) {
		this.notes = notes;
	}

}
