using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
public class WindowGraph : MonoBehaviour
{
    [SerializeField] private RectTransform graphContainer;
    [SerializeField] private Sprite circleSprite;
    private Vector2 lastCircle;
    private int count = 0;
    public static Dictionary<string, List<int[]>> populations = new Dictionary<string, List<int[]>>();

    public static int[,] points = {
    {1, 2},
    {2,4},
    {3,-1},
};
    void Awake()
    {
        populations["Magikarp"] = new List<int[]>();  
        createGraph();

    }

    void Update(){
        if(Input.GetKey("space")){
        populations["Magikarp"].Add(new int[2] {count, Random.Range(-400, 400)});  
        createGraph();
        count++;
        Debug.Log(count);
        }
    }



    public void createGraph(){
        foreach (Transform child in graphContainer)
        {
            Destroy(child.gameObject);
        }
        lastCircle = new Vector2(0,0);
             foreach (var point in populations["Magikarp"])
        {

            createPoint(new Vector2((((graphContainer.rect.width - 60)/count * point[0]) + 30 ) ,(point[1])));
        }
    }
public void createPoint(Vector2 anchoredPos){
    GameObject gameObject = new GameObject($"{anchoredPos} point", typeof(Image)); 
    
    gameObject.transform.SetParent(graphContainer, false);
    gameObject.GetComponent<Image>().sprite = circleSprite;
    RectTransform rectTransform = gameObject.GetComponent<RectTransform>();

    Vector2 anchorMin = rectTransform.anchorMin;
Vector2 anchorMax = rectTransform.anchorMax;

anchorMin.x = graphContainer.anchorMin.x;
anchorMax.x = graphContainer.anchorMax.x;

rectTransform.anchorMin = anchorMin;
rectTransform.anchorMax = anchorMax;

    rectTransform.anchoredPosition = anchoredPos;   

    rectTransform.sizeDelta = new Vector2(30,30);

    if(lastCircle != new Vector2(0,0)){
        createLine(lastCircle, anchoredPos);
    }
    else{
        Debug.Log("I MUST CONFESS");    
    }
    lastCircle = anchoredPos;
}

public void createLine(Vector2 oldPoint, Vector2 newPoint){
        GameObject line = new GameObject("line", typeof(Image));
        line.transform.SetParent(graphContainer, false);
        RectTransform rectTransform = line.GetComponent<RectTransform>();
        
               Vector2 anchorMin = rectTransform.anchorMin;
Vector2 anchorMax = rectTransform.anchorMax;

anchorMin.x = graphContainer.anchorMin.x;
anchorMax.x = graphContainer.anchorMax.x;

rectTransform.anchorMin = anchorMin;
rectTransform.anchorMax = anchorMax;

        Vector2 direction = (oldPoint - newPoint).normalized;
        float distance = Vector2.Distance(oldPoint, newPoint);
    
        rectTransform.sizeDelta = new Vector2(distance,10);
        rectTransform.anchoredPosition = (oldPoint + newPoint) / 2;

        float angle = Mathf.Atan2(direction.y, direction.x) * Mathf.Rad2Deg;
        rectTransform.localRotation = Quaternion.Euler(0, 0, angle);
}
}