import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
export default class PageOne extends Component {
    @tracked
    title = "Welcome to glimmer";

    buttonText = "Click Me!"

    buttonClick() {
        console.log('in next');
        this.title = "Ive heard it both ways";
    }
}
