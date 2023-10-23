package assignment3_java;

import java.util.Scanner;

public class Assignment3_java 
{

	public static void main(String[] args) {
		 Scanner scanner = new Scanner(System.in);
	        System.out.print("Enter a sentence: ");
	        String input = scanner.nextLine();
	        scanner.close();

	        if (isPangram(input))
	        {
	            System.out.println("The input is a pangram.");
	        } 
	        else 
	        {
	            System.out.println("The input is not a pangram.");
	        }
	    }

	    public static boolean isPangram(String input) 
	    {
	        
	        boolean[] letters = new boolean[26];

	        
	        input = input.toLowerCase();

	        for (int i = 0; i < input.length(); i++)
	        {
	            char ch = input.charAt(i);
	            if (ch >= 'a' && ch <= 'z') 
	            {
	                letters[ch - 'a'] = true;
	            }
	        }

	       
	        for (boolean letter : letters) 
	        {
	            if (!letter) 
	            {
	                return false;
	            }
	        }

	        return true;
	    }
	}