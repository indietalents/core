package com.indietalents.example;

public class AppMain {
	
	public static final String MESSAGE_TO_ENCRYPT = "reincarnate";
	
	public static void main(String[] args) {
		EncryptionService service = new MD5EncryptionService();
		System.out.println("Encryption Services");
		System.out.println("Message to encrypt: " + MESSAGE_TO_ENCRYPT);
		System.out.println("Result: " + service.encryptMessage(MESSAGE_TO_ENCRYPT));
	}

}
