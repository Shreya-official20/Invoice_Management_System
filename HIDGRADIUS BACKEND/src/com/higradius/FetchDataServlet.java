package com.higradius;

import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

/**
 * Servlet implementation class FetchDataServlet
 */
@WebServlet("/FetchDataServlet")
public class FetchDataServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
	
	//JDBC driver name and database URL
	static final String JDBC_DRIVER = "com.mysql.jdbc.Driver";
	static final String DB_URL = "jdbc:mysql://localhost:3306/sakila";
	// Database credentials
	static final String USER = "root";
	static final String PASSWORD = "1775";
       
    /**
     * Default constructor.
     */
    public FetchDataServlet() {
        super();
    }

	protected void doGet(HttpServletRequest request, HttpServletResponse response) 
			throws ServletException, IOException {
		// response.getWriter().append("Served at: ").append(request.getContextPath());
		Connection con = null;
		Statement stmt = null;
		ArrayList<Response> responseList = new ArrayList<>();
		try {
			Class.forName("com.mysql.jdbc.Driver");
			con = DriverManager.getConnection(DB_URL, USER, PASSWORD);
			stmt = con.createStatement();
			String sql;
			sql = "select customer_name, customer_number, invoice_number, invoice_amount, due_date, predicted_payment_date, notes from invoice";
			ResultSet rs = stmt.executeQuery(sql);
			while (rs.next()) {
				Response res = new Response();
				res.setCustomer_name(rs.getString("customer_name"));
				res.setCustomer_number(rs.getString("customer_number"));
				res.setInvoice_number(rs.getString("invoice_number"));
				res.setInvoice_amount(rs.getString("invoice_amount"));
				res.setDue_date(rs.getString("due_date"));
				res.setPredicted_payment_date(rs.getString("predicted_payment_date"));
				res.setNotes(rs.getString("notes"));
				responseList.add(res);	
			}
			String jsonString = getJSONStringFromObject(responseList);
			response.setContentType("application/json");
			try {
				response.getWriter().write(jsonString);
			} catch (IOException e) {
				e.printStackTrace();
			}
			rs.close();
			stmt.close();
			con.close();
		} catch (SQLException se) {
			se.printStackTrace();
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			try {
				if (stmt != null)
					stmt.close();
			} catch (SQLException se2) {
		}
			try {
				if (con != null)
					con.close();
			} catch (SQLException se) {
				se.printStackTrace();
			}
	    }
	}
	
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doGet(request, response);
	}
private String getJSONStringFromObject(ArrayList<Response> responseList) {
	Gson gson = new GsonBuilder().setPrettyPrinting().create();
	String json = gson.toJson(responseList);
	System.out.println(json);
	return json;
  }
}
