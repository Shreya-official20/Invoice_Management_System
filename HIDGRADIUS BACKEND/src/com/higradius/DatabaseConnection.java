package com.higradius;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class DatabaseConnection {
    protected static Connection initializeDatabase()
            throws SQLException, ClassNotFoundException
{
	//Initialize all the information regarding
	//Database Connection
    	String JDBC_DRIVER = "com.mysql.jdbc.Driver";
    	String DB_URL = "jdbc:mysql://localhost:3306/sakila";
    	String USER = "root";
        String PASSWORD = "1775";
	Class.forName(JDBC_DRIVER);
	Connection con = DriverManager.getConnection(DB_URL, USER, PASSWORD);
	
	if (con != null)
	{
		System.out.println("Database Connected successfully"); 
	}
	else
	{
		System.out.println("Database not Connected successfully"); 

	}
	return con;
}
}
