import React from 'react';
import { connect } from 'react-redux'

import colab from '../images/colab.png'
import sts from '../images/sts.png'
import rubygem from '../images/rubygem.png'
import me1 from '../images/me1.jpg'
import darth from '../images/darth.png'
import stormtrooper from '../images/stormtrooper.png'

import * as d3 from "d3";
import * as c3 from "c3";


require('../styles/general.scss');
require('../styles/skills.scss');
require('../../node_modules/c3/c3.min.css');


class Skills extends React.Component {

  generatePieChart() {
    var chart2 = c3.generate({
        bindto: '#chart2',
        data: {
            columns: [
                
            ],
            type : 'donut'
        },
        donut: {
          title: "Fullstack Ratio"
        },
        transition: {
          duration: 1000
        }
    });
    setTimeout(function () {
        chart2.load({
            columns: [
              ['Backend', 60]
              
            ]
        });
    }, 500);

    setTimeout(function () {
        chart2.load({
            columns: [
              ['Frontend', 40]
            ]
        });
    }, 1000);
  }

  generateBarChart() {
    var skills = this.props.skills;
    var levels = skills.map(function(item) {return item.level})
    levels.unshift("Level");
    var chart = c3.generate({
        bindto: '#chart',
        size: {
          height: 320,
          width: 600
        },
        data: {
          columns: [],
          type: 'bar',
          colors: {
            skills: skills,
            Skills: function(d) {
              if (typeof(d) == 'object') {
                if (this.skills[d.index].category == 'frontend' ) {
                  return '#FF7F0E'
                }else{
                  return '#1F77B4'
                }
              }
              
            }
          }
        },
        axis : {
            // rotated: true,
            x: {
                type: 'category',
                categories: skills.map(function(item) {return item.name})
            },
            y : {
              tick: {
                  min: 0,
                  max: 10,
                  count: 5,
                  format: function (d) { 
                    var yLabel = ""
                    switch(true) {
                      case (d<=2):
                        yLabel = "Uh? Next question?";
                        break;
                      case (d>2 && d<=4):
                        yLabel = "Basic, you can't always win...";
                        break;
                      case (d>4 && d<=6):
                        yLabel = "Medium, I'm trying to improve.";
                        break;
                      case (d>6 && d<=8):
                        yLabel = "High, I'm pretty good.";
                        break;
                      case (d>8):
                        yLabel = "I'm the master of the universe.";
                        break;        
                    }
                    return yLabel;
                  }
              }
        }
        }
        ,
        transition: {
          duration: 1000
        }
      });
        
    var levels = skills.map(function(item) {return item.level})
    levels.unshift("Skills");
    setTimeout(function () {
        chart.load({
            columns: [
              levels
            ]
        });
    }, 500, skills);
  }
  componentDidMount() {
    this.generatePieChart();
    this.generateBarChart();
  }

  render() {
    return(
      <div className="skills-container">
        <div className="skills-inner-container">
          <div className="row intro">
            <div className="col-md-12 card">
              <div className="card-inner">
                <div className="profile-image-container">
                  <img src={darth} className="profile-image"/>
                </div>
                <div className="profile-description-container">
                  <p>5 Years of experience in building consumer and enterprise applications from scratch. Well versed with the object oriented concepts and hands on experience at both backend and frontend technologies. A true go to guy for any web application problem.</p>
                </div>
              </div>  
            </div>
          </div>
          <div className="row">
            <a className="col-md-4 card" href="http://colab.pipecast.in/" target="_blank">
              <div className="card-inner highlights-card">
                <div className="card-numbers">
                  <div className="number"> 2276 </div>
                  <div className="number-description"> Users </div>
                </div>
                <div className="card-description">
                  <div className="card-description-logo"> <img src={colab}/> </div>
                  <div className="card-description-title"> Pipecast.in </div>
                </div>
              </div>  
            </a>  
            <a className="col-md-4 card" href="https://chrome.google.com/webstore/detail/files-deleter-for-slack/mecaeilcedkdpkfjlijlcodonpbbpaei" target="_blank">
              <div className="card-inner highlights-card">
                <div className="card-numbers">
                  <div className="number"> 60 </div>
                  <div className="number-description"> Downloads </div>
                </div>  
                <div className="card-description">
                  <div className="card-description-logo"> <img src={sts}/> </div>
                  <div className="card-description-title"> Files Deleter For Slack </div>
                </div>
              </div>  
            </a>  
            <a className="col-md-4 card" href="https://rubygems.org/gems/smart_sort" target="_blank">
              <div className="card-inner highlights-card">
                <div className="card-numbers">
                  <div className="number"> 440 </div>
                  <div className="number-description"> Downloads </div>
                </div>
                <div className="card-description">
                  <div className="card-description-logo"> <img src={rubygem}/> </div>
                  <div className="card-description-title"> Smart Sort </div>
                </div>  
              </div>  
            </a>  
          </div>
          <div className="row charts">
            <div className="col-md-4 card">
              <div className="card-inner">
                <div id="chart2">Chart div2</div>
              </div>  
            </div>  
            <div className="col-md-8 card bar-chart-card">
              <div className="card-inner">
                <div id="chart">Chart div</div>
              </div>  
            </div>  
          </div>  
          
        </div>
      </div>  
    );  
  }
}

function mapStateToProps(state) {
  return {
    skills: state.skills
  };
}


export default connect(mapStateToProps, null)(Skills);