using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class exitButton : MonoBehaviour
{
   public GameObject modal; 

 public void click(){
    modal.SetActive(false);
 }
}
