# Transgender Resource Messenger

This project is the beginning of a long held desire to provide an easy way for Trans folks who may not have easy access to internet resources to get vital information (and inspiration) sent to them via text. I chose to use the Twilio SMS/MMS API due to its ease of integration into a standard Express App. Users can text a Twilio phone number and get a menu of options to choose from, and based on the user's reply, they will receive resource links for legal aid, crisis management, trans-friendly medical professionals, and even some inspirational quotes.

### Current Features:

- User receives a welcome text reply after texting anything to the main number.
- User also receives a menu of options (currently three) to choose from.
- If the user replies back with any one of the four words (TALK, LEGAL, HEALTH or LOVE), they receive the appropriate resource.
- If the user replies back with a different word than those four options, they receive the menu again with a more detailed prompt of how the app works.

### Future Features:

- A verified buddy network for going to stressful appointments (like doctors or the DMV), where the user can text a request to the service and be linked up with an available buddy in their area.

## Getting Started

### Prerequisites

You will need to have Node and NPM installed. You will also need to register for at least a trial account on https://www.twilio.com to play with the functionality of the app.

### Installing

- Fork and clone this repository. Navigate into your cloned repository and run ```npm install``` to get all of the required dependencies.

## Built With

- Node
- Express
- Twilio

## Contributing

I would love help from the queer and trans community to truly make this a resource! If you want to contribute, please create a branch and make a pull request!

## Author
[Framinus](https://github.com/Framinus)

## License
This project is licensed under the MIT License.
