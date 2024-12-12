using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using TMPro;
using UnityEngine.UI; 
using UnityEngine.Events;
public class fishScript : MonoBehaviour
{   
    public List<Fish> fishList;  
    private Fish fish;
    public SpriteRenderer sprite;   
    private float sin;
    private float startPos;
    private float totalPopulation;
    private float randChoice;
    private float randNum;
    private int cumulativePopulation;
    [SerializeField] private UnityEvent<string[]> switchText;


    void Start(){

        sin = Random.value * 50;
        startPos =((Random.value * 7.5f) - 3.75f);
        fish = pickRandomFish();    
        transform.localScale = fish.scale * (1 - ((Random.value - .5f)/5));
        sprite.sprite = fish.image;
        sprite.sortingOrder = Random.Range(0,50);
       
    }

    public void OnBecameInvisible()
    {
        Destroy(gameObject); 
    }
    void Update()
    {
        sin += Time.deltaTime;
        transform.position = new Vector3(transform.position.x + (-Time.deltaTime * fish.speed),startPos + (Mathf.Sin(sin * fish.waveSpeed))/fish.waveDistance, (float)(transform.position.z) );
    }

    public Fish pickRandomFish(){
        totalPopulation = 0;
        foreach(var fish in fishList){
            totalPopulation += fish.population;
        }
       randNum = Random.Range(0,totalPopulation);
       foreach(var fish in fishList){
        cumulativePopulation += fish.population;
       
        if(randNum < cumulativePopulation){
            return fish;  
        }
    }
    return fishList[0];
    }

        void OnMouseDown()
       {
        if(!UnityEngine.EventSystems.EventSystem.current.IsPointerOverGameObject()  ){

        modalScript.textInfo = new string[] {fish.name,fish.desc};  
        modalScript.modal.SetActive(true);
        } 
       }      
}
