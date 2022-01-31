import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function Experience() {

  return (
    <View style={styles.container}>
      <Text id="experience" style={styles.h1}>Experience</Text>
      <Text id="education-header" style={styles.h5}>Experience</Text>
      <Text style={styles.p}>
        Experience           
      </Text>
      <Text>
        {/* <h2 id="experience">Experience</h2>
          <h6>AlphaWorks <span>React Apprentice 10/2021 - Current</span></h6>
          <h6>Project Erostribe <span>Creative Director 1/2010 - Current</span></h6>
            <ul>
              <li> Supervised project collaborations with internationally recognized recording artists such as Shpongle and Ott, World Bodypaint Champions such as Trina Merry and Matteo Arfanotti and companies such as Google and Microsoft.</li>
              <li> Directed art projects for events such as Re: Creation San Francisco, Burning Man 2017, Hot Couture</li>
              <li> Raised over $60,000 in private funds.</li>
              <li> Managed social media accounts totaling 20K in followers.</li>
          </ul>
          <h6>WallBreakers <span>Community Manager 4/2021- 9/2021</span></h6>
          <h6>Code Crew <span>Teacher's Assistant 3/2021- 12/2021</span></h6>
            <ul>
              <li> Work with lead teacher to monitor class attendance.</li>
              <li> Revise lesson material with students individually or in small groups.</li>
              <li> Collaborate with lead teachers to recognize issues students are facing and recommend solutions.</li>
              <li> Grade student's assignments using online grading system.</li>
              <li> Document student progress and communicate with staff.</li>
              <li> Ensure a safe online learning environment.</li>
          </ul>
          <h6>Concept SF <span>Lead Editor 1/2018 - 10/2021</span></h6>
            <ul>
              <li> Review submitted posts and decide which ones to accept and reject.</li>
              <li> Edit posts for clarity, grammar and match for style and tone.</li>
              <li> Write or modify content to maximize post quality, reader interest, and social media referrals.</li>
              <li> Ensure that blog posts go to clients in a timely manner.</li>
              <li> Develop proposals for achieving goals and targets, including increasing readership and content engagement.</li>
              <li> Execute on planned strategies to achieve set targets while ensuring quality remains high.  Use metrics and data to measure progress.</li>
              <li> Cultivate and support volunteer contributions to ensure a dependable, diverse group of content creators.</li>
              <li> Lead meetings to plan editorial content for upcomming projects.</li>
          </ul>

          <h6>Grabango <span>Quality Trainer 1/2019- 10/2019</span></h6>
            <ul>
              <li> Helped teams collect, clean and label data and images.</li>
              <li> Identified and categorized objects in images and videos.</li>
              <li> Annotated actions in images and videos.</li>
              <li> Used various sets of rules to process data sets, logged exceptions as they occurred.</li>
          </ul>

          <h6>TechInclusion <span>Social Media Voluteer 1/2016- 10/2019</span></h6>
            <ul>
              <li> Plan and execute social media campaigns for events in New York San Francisco, London, Melbourne and others both nationally and internationally.</li>
              <li> Successfully implemented a new video interview component to Social Media that increased follower engagement.</li>
              <li> Managed social media accounts with over 3,000 followers.</li>
            </ul>

          <h6>Kinetic Arts Center <span>Administrative Assistant 6/2018- 3/2019</span></h6>
            <ul>
              <li> Managed front desk, including telephones, mail/messages, faxes and visitors.</li>
              <li> Reviewed and entered class enrollment into MindBody software system.</li>
              <li> Registered new clients and assist with purchases of class packages and merchandise.</li>
              <li> Provided correspondence for customer concerns in person, by phone and email.</li>
              <li> Managed community donations on behalf of Kinetic Arts.</li><h5>Experience</h5> */}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '95%',
        backgroundColor: '#486766',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    h1: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    h5: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 20,
        
    },
    p: {
        marginBottom: 20,
    }
});