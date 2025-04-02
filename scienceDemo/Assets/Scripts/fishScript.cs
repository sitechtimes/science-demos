using System.Collections.Generic;
using UnityEngine;

public class FishScript : MonoBehaviour
{
    public static List<Fish> fishList = new List<Fish>();
    public List<Fish> fishes = new List<Fish>();
    private Fish fish;
    public SpriteRenderer sprite;
    private float sin;
    private float startPos;
    private float totalPopulation;
    private float randNum;
    private int cumulativePopulation;

    void Awake()
    {
        fishList.Clear();
        fishList.AddRange(fishes);
    }

    void Start()
    {
        InitializeFish();
    }

    private void InitializeFish()
    {
        sin = Random.value * 50;
        startPos = Random.Range(-3.75f, 3.75f);
        fish = PickRandomFish();
        transform.localScale = fish.scale * (1 - ((Random.value - 0.5f) / 5));
        sprite.sprite = fish.image;
        sprite.sortingOrder = Random.Range(0, 50);
    }

    public void OnBecameInvisible()
    {
        Destroy(gameObject);
    }

    void Update()
    {
        MoveFish();
    }

    private void MoveFish()
    {
        sin += Time.deltaTime;

        float newY = startPos + (Mathf.Sin(sin * fish.waveSpeed) / fish.waveDistance);

        Vector3 newPosition = transform.position;
        newPosition.x -= fish.speed * Time.deltaTime;
        newPosition.y = newY;

        transform.position = newPosition;
    }
    public Fish PickRandomFish()
    {
        totalPopulation = 0;
        cumulativePopulation = 0;

        foreach (var fish in fishList)
        {
            totalPopulation += fish.population;
        }

        randNum = Random.Range(0, totalPopulation);
        foreach (var fish in fishList)
        {
            cumulativePopulation += fish.population;

            if (randNum < cumulativePopulation)
            {
                return fish;
            }
        }

        return fishList[0];
    }

    void OnMouseDown()
    {
        // Check if the pointer is over a UI element

        Debug.Log("Mouse clicked on fish object.");
        modalScript.textInfo = new string[] { fish.name, fish.desc };
        modalScript.modal.SetActive(true);

        // Get the mouse position in screen space
        Vector3 mousePosition = Input.mousePosition;

        // Convert the mouse position to a RectTransform position
        RectTransform rectTransform = modalScript.modal.GetComponent<RectTransform>();
        Vector2 anchoredPosition;
        RectTransformUtility.ScreenPointToLocalPointInRectangle(
            rectTransform.parent.GetComponent<RectTransform>(), // Parent RectTransform (Canvas)
            mousePosition,
            null, // Use null for the main camera if the canvas is in Screen Space - Overlay
            out anchoredPosition
        );

        // Set the modal's anchored position
        rectTransform.anchoredPosition = anchoredPosition;

        Debug.Log("Modal position set to: " + rectTransform.anchoredPosition);



    }
}




    

/* Staghorn coral	Boulder star coral	Sponges	Algae	Stoplight parrotfish	Queen angelfish	Yellowtail snapper	Nassau grouper	Long-spined sea urchin	Hawkbill sea turtle	Red lionfish	Crown-of-thorns starfish
21	28	11	27	825	540	240	48	1160	25	0	0*/