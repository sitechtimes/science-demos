using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
public class WindowGraph : MonoBehaviour
{
    [SerializeField] private RectTransform graphContainer;
    [SerializeField] private RectTransform holder;
    [SerializeField] private Sprite circleSprite;
    [SerializeField] private Sprite xAxisImage; 
    private Vector2 lastCircle;
    public static int count = 0;
    private int index = 0;
    public GameObject fishHolder;
    private Color[] colors = new Color[] { Color.red, Color.blue, Color.green, Color.white, Color.yellow, Color.black };
    public static Dictionary<string, List<int[]>> populations = new Dictionary<string, List<int[]>>();

    private Dictionary<string, bool> showingInfo = new Dictionary<string, bool>
        {
            { "MagikarpItem", true },
            { "FeebasItem", true },
        };

    void Awake()
    {
        reset();
    }
    public void reset(){
        holder.localPosition  = Vector3.zero; 
        count = 0;
        populations["Magikarp"] = new List<int[]>();
        populations["Magikarp"].Add(new int[2] {count, 50 });
        count++;
        // populations["Feebas"] = new List<int[]>();
        // populations["Remoraid"] = new List<int[]>();
        foreach (Transform child in fishHolder.transform)
        {
    GameObject.Destroy(child.gameObject);    
        }
        createGraph();
    }

    public void createGraph()
    {   
         holder.localPosition  = Vector3.zero; 
        foreach (Transform child in holder)
        {
            if(child.tag != "ActiveCheck"){
      Destroy(child.gameObject);
            }
        }
        lastCircle = new Vector2(0, 0);
        index = 0;
            for(int r = 1; r <= populations["Magikarp"].Count; r++){
            float x = (graphContainer.rect.width/10 * r);
            createAxisX(x);
        }
        createAxisY(0);
        int largest = populations
            .SelectMany(kvp => kvp.Value) 
            .SelectMany(arr => arr)
            .Max();   
            Debug.Log(largest);
        foreach (var key in populations.Keys)
        {
            Debug.Log(populations[key].Count);
            foreach (var point in populations[key])
            {   
                
                // createPoint(new Vector2((count > 1) ? (((graphContainer.rect.width - 60) / (count - 1)) * point[0]) + 30 -graphContainer.rect.width * .5f : 30, (point[1] - 50) * 10));
                float x = (graphContainer.rect.width/10 * (point[0]+1));
                float y = ((graphContainer.rect.height * (point[1]/100f)) - graphContainer.rect.height * .5f) * .85f;
                Debug.Log($"val is {point[1]}, y is {y}");
                
                createPoint(new Vector2((int)x,(int)y), key);
            }
            lastCircle = new Vector2(0, 0);
            index++;
        }
    }

    public void createAxisX(float x){
        GameObject line = new GameObject($"xAxis{x}", typeof(Image));
        line.transform.SetParent(graphContainer, false);
        RectTransform rectTransform = line.GetComponent<RectTransform>();
        line.GetComponent<Image>().color = new Color(1f, 1f, 1f, 0.5f); 
        Vector2 anchorMin = rectTransform.anchorMin;
        Vector2 anchorMax = rectTransform.anchorMax;

        anchorMin.x = graphContainer.anchorMin.x;
        anchorMax.x = graphContainer.anchorMax.x;

        rectTransform.sizeDelta = new Vector2(graphContainer.rect.height, 5);
        rectTransform.anchoredPosition = new Vector2(x,0);
        rectTransform.localRotation = Quaternion.Euler(0, 0, 90);

        line.transform.SetParent(holder, true);
    }
    public void createAxisY(float y){
        GameObject line = new GameObject($"yAxis{y}", typeof(Image));
        line.transform.SetParent(graphContainer, false);
        RectTransform rectTransform = line.GetComponent<RectTransform>();
        line.GetComponent<Image>().color = new Color(1f, 1f, 1f, 0.5f); 
        Vector2 anchorMin = rectTransform.anchorMin;
        Vector2 anchorMax = rectTransform.anchorMax;

        anchorMin.x = graphContainer.anchorMin.x;
        anchorMax.x = graphContainer.anchorMax.x;

        rectTransform.sizeDelta = new Vector2(graphContainer.rect.width, 5);
        rectTransform.anchoredPosition = new Vector2(graphContainer.rect.width*.5f,100);

        line.transform.SetParent(holder, true);
    }
    public void createPoint(Vector2 anchoredPos, string fishName)
    {
        GameObject gameObject = new GameObject($"{anchoredPos} point", typeof(Image));
        gameObject.transform.SetParent(graphContainer, false);
        gameObject.GetComponent<Image>().sprite = circleSprite;
        gameObject.GetComponent<Image>().color = colors[index];
        RectTransform rectTransform = gameObject.GetComponent<RectTransform>();
        Vector2 anchorMin = rectTransform.anchorMin;
        Vector2 anchorMax = rectTransform.anchorMax;

        anchorMin.x = graphContainer.anchorMin.x;
        anchorMax.x = graphContainer.anchorMax.x;

        Debug.Log(fishName);
        gameObject.tag = $"{fishName}Item";

        rectTransform.anchoredPosition = anchoredPos;

        rectTransform.sizeDelta = new Vector2(50, 50);

        if (lastCircle != new Vector2(0, 0))
        {
            createLine(lastCircle, anchoredPos, fishName);
        }
        lastCircle = anchoredPos;
        gameObject.transform.SetParent(holder, true);
        gameObject.SetActive(showingInfo[$"{fishName}Item"]); 
    }

    public void createLine(Vector2 oldPoint, Vector2 newPoint, string fishName)
    {
        GameObject line = new GameObject("line", typeof(Image));
        line.tag = $"{fishName}Item";
        line.transform.SetParent(graphContainer, false);
        RectTransform rectTransform = line.GetComponent<RectTransform>();
        line.GetComponent<Image>().color = colors[index];
        Vector2 anchorMin = rectTransform.anchorMin;
        Vector2 anchorMax = rectTransform.anchorMax;

        anchorMin.x = graphContainer.anchorMin.x;
        anchorMax.x = graphContainer.anchorMax.x;

        // rectTransform.anchorMin = anchorMin;
        // rectTransform.anchorMax = anchorMax;

        Vector2 direction = (oldPoint - newPoint).normalized;
        float distance = Vector2.Distance(oldPoint, newPoint);

        rectTransform.sizeDelta = new Vector2(distance, 10);
        rectTransform.anchoredPosition = (oldPoint + newPoint) / 2;

        float angle = Mathf.Atan2(direction.y, direction.x) * Mathf.Rad2Deg;
        rectTransform.localRotation = Quaternion.Euler(0, 0, angle);
        line.transform.SetParent(holder, true);
        
        line.SetActive(showingInfo[$"{fishName}Item"]); 
    }

    void Update(){
  if(Input.GetKeyDown("q")){
        hideOnGraph("MagikarpItem");
    }
}

public void hideOnGraph(string hideThis){
            foreach (Transform child in holder){
                if(child.tag == hideThis || child.tag == "ActiveCheck"){
                     child.gameObject.SetActive(!showingInfo[hideThis]); 
                     Debug.Log(child.gameObject.activeSelf);
                }
            }
              showingInfo[hideThis] = !showingInfo[hideThis]; 
}
}