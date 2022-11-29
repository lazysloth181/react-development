# Development

### Link to Deployed Website
If you used the stencil code, this is `https://<your GitHub username>.github.io/<name of your repository>`

### Goal and Value of the Application
I created a bakery ordering website, which shows a variety of menu items for a local bakery. This site provides value for the users by allowing them to choose between different products, and allowing them to easily check the main ingredients and the prices for each of the items. This application also aggregates the prices of the items into a grand total, allowing users to easily price their order.

### Usability Principles Considered
I considered Learnability, Memorability, and Efficiency when building my application.

For Learnability, I made it easy for the user to learn how to use the application by putting in high-contrast visual elements as the interactive elements of the page. For example, my background is black and the checkboxes and the text are white, so the user can easily discover and click the checkboxes to filter through different categories of items.

For Memorability, it is easy to recall what to do because they can easily scroll through items and press "add to cart" to add items to their cart. The visual hierarchy and the menu panel's different background color (bright green, as opposed to the rest of the page, black) suggests that users should focus on that panel and make their choices.

For Efficiency, the users can easily quickly achieve their tasks because the side bar is at the right middle of the screen, which is the easiest position for users to put their cursor. In addition, most users are right-handed, and even for left-handed users, they can easily navigate the cursor to the middle of the screen. So, I considered Efficiency while building the design of my page. 

### Organization of Components
I have the main encompassing component, which is the App.js file. Then, within this app, I have three different panels that represent the menu, the side bar which the user can use to filter through different categories of items, and the final cart where user can add and remove the items. In these panels, I have a component that represents a menu item called "BakeryItem", and also a component used to represent each item in the cart called "CartItem". 

In short, the main components are the following:

- App
- BakeryItem
- CartItem


### How Data is Passed Down Through Components
For BakeryItem and CartItem, I pass in a function to each of those components to allow adding and removing from the cart of the items. 
In addition, I pass the data of each item in the BakeryData json file into each of the components, so that the smaller components have access to the item's ingredient, name, price, and other information.

### How the User Triggers State Changes
When the user presses the buttons in each component, the user can trigger the function that was passed down to that component. For example, in CartItem, the user may press the button that says "Remove From Cart", and that will trigger a state change in App.js of removing that particular item from the list of cart items, which is a state variable (called shopCartItems).
