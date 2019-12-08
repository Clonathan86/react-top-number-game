var React = require('react');

class Ranking extends React.Component {

    render(){

        var rankingDisplay = {
            display: this.props.game ? 'none' : 'inline-block'
        };

        return (
            <div style={rankingDisplay}>
                <table>
                    <thead>
                        <tr>
                            <th>Rank</th>
                            <th>Name</th>
                            <th>Points</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Vannemerak</td>
                            <td>1460000</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Tatan</td>
                            <td>146500</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Clonathan</td>
                            <td>146500</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Vannemerak</td>
                            <td>1460000</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>Tatan</td>
                            <td>146500</td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>Clonathan</td>
                            <td>146500</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }

}

module.exports = Ranking;
