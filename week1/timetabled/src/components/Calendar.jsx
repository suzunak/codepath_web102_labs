import React from 'react';
import Event from './Event.jsx';

const Calendar = () => {
    return (
        <div class ="Calendar"> 
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>Sunday</th>
                        <th>Monday</th>
                        <th>Tuesday</th>
                        <th>Wednesday</th>
                        <th>Thursday</th>
                        <th>Friday</th>
                        <th>Saturday</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td className="time">8am</td>
                        <Event event='breakfast' color='green' location='123 Atlanta'/>
                        <td></td>
                        <td></td>
                        <Event event='breakfast' color='green'/>
                        <td></td>
                        <Event event='Chickfila' color='red'/>
                        <td></td>
                    </tr>

                    <tr>
                        <td className="time">9am</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event='Aquarium' color='blue' location='Midtown'/>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>

                    <tr>
                        <td className="time">10am</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>

                    <tr>
                        <td className="time">11am</td>
                        <td></td>
                        <Event event='Brunch' color='blue'/>
                        <td></td>
                        <td></td>
                        <Event event='Brunch' color='blue'/>
                        <td></td>
                        <td></td>
                    </tr>


                    <tr>
                        <td className="time">12pm</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>

                    <tr>
                        <td className="time">1pm</td>
                        <td></td>
                        <td></td>
                        <Event event='Tea Party' color='pink'/>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>

                    <tr>
                        <td className="time">2pm</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>

                    <tr>
                        <td className="time">3pm</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event='Museum' color='green'/>
                        <td></td>
                    </tr>

                    <tr>
                        <td className="time">4pm</td>
                        <td></td>
                        <Event event='Fox Theater' color='red'/>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>

                    <tr>
                        <td className="time">5pm</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event='Braves Games' color='red'/>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Calendar;
