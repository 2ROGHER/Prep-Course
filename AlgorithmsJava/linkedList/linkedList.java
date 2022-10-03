//lo primero es crear una clase llamada LinkedList
import java.security.spec.ECPoint;
import java.util.*;
//*********** THIS IS THE OPP ********* */
//lest to study this code//
class LinkedList{
    Node head;
    class Node {
        int data; 
        Node next;
        //this is the node clase 
        Node(int d){
            this.data = d;
            this.next = null;
        }
    }
    public static void main(String[] args){
        LinkedList Llist = new LinkedList();
        Llist.head = new Node(1);
        Node second = new Node(2);
        Node third = new Node(3);
        Llist.head.next = null;
        second.next = third;
        
    }
}
