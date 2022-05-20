# breakingBad_api
 Main CA Mobile Development built with Ionic & Angular

Design plan:

1. App skeleton with core service and possible favourites

    a). Mostly there with tabs, navigation & pages

    b). Move onto page code

    

2. Add a little more to the view:

   a). Characters selection page show image, name & alias

   b). Episode selector shows season & episode number

   

3. Base theme off of the "***Breaking Bad***" theme dark greens, white font on black:

    *https://upload.wikimedia.org/wikipedia/en/6/61/Breaking_Bad_title_card.png*

    Greens: 053D00-rgb(5,61,0), 113F12-rgb(17,63,18), 1F4113-rgb(31,65,19), 242D00-rgb(36,45,0), 1B2700-rgb(27,39,0)

    Grey/White: E3EBCA-rgb(227,235,202), EAF1E6-rgb(234,241,230)

    Background: rgb < 14

    

4. Store favourites in a map:

    ```javascript
    {
    	"PageX": [
    		1, 4, 5
    	],
    	
    	"PageY": [ 
    		6, 7, 9
    	]
    }
    ```

    


5. Follow & try implement the pagination from the Sports Store from chapter 7

   Decided against it because the app is quite "scrolly" anyway and technologies like DynamoDB use next tokens for fetching net ~4KB of data. Initial idea was to construct an instance of a "page" from the subscribed observable results. The page class would then have attributes for the size of the list of returned results and editable attribute for the number of items per page. Getters, settters would be used to guide user through content.

​	*https://github.com/Apress/pro-angular-9*

6. Gitpod Script:

   Decided to build the app from a blank angular project and so used the code from class, but never worked in my sessions. Given technologies like Terraform & preference for learning more/resources about angular opted for letting it slide.
