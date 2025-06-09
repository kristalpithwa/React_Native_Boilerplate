import {FlatList, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useContext, useState} from 'react';

import JobCard from '../../../Component/JobCard';
import {AuthContext} from '../../../Context/Context';

export default function Home({navigation}) {
  const {logout} = useContext(AuthContext);
  const [search, setSearch] = useState('');
  const [list, setList] = useState([
    {
      id: 1,
      title: 'Frontend Developer',
      company: 'Company 1',
      location: 'New York',
      type: 'full-time',
      time: 'Full Time',
    },
    {
      id: 2,
      title: 'Backend Developer',
      company: 'Company 2',
      location: 'San Francisco',
      type: 'part-time',
      time: 'Part Time',
    },
    {
      id: 3,
      title: 'UI/UX Designer',
      company: 'Company 3',
      location: 'Remote',
      type: 'contract',
      time: 'Contract',
    },
    {
      id: 4,
      title: 'Project Manager',
      company: 'Company 4',
      location: 'Chicago',
      type: 'full-time',
      time: 'Full Time',
    },
    {
      id: 5,
      title: 'Mobile Developer',
      company: 'Company 5',
      location: 'Los Angeles',
      type: 'freelance',
      time: 'Freelance',
    },
    {
      id: 6,
      title: 'DevOps Engineer',
      company: 'Company 6',
      location: 'Austin',
      type: 'full-time',
      time: 'Full Time',
    },
    {
      id: 7,
      title: 'Data Analyst',
      company: 'Company 7',
      location: 'Seattle',
      type: 'part-time',
      time: 'Part Time',
    },
    {
      id: 8,
      title: 'QA Tester',
      company: 'Company 8',
      location: 'Boston',
      type: 'full-time',
      time: 'Full Time',
    },
    {
      id: 9,
      title: 'System Administrator',
      company: 'Company 9',
      location: 'Denver',
      type: 'contract',
      time: 'Contract',
    },
    {
      id: 10,
      title: 'Full Stack Developer',
      company: 'Company 10',
      location: 'Remote',
      type: 'full-time',
      time: 'Full Time',
    },
    {
      id: 11,
      title: 'Product Manager',
      company: 'Company 11',
      location: 'Atlanta',
      type: 'full-time',
      time: 'Full Time',
    },
    {
      id: 12,
      title: 'Technical Writer',
      company: 'Company 12',
      location: 'Miami',
      type: 'part-time',
      time: 'Part Time',
    },
    {
      id: 13,
      title: 'Business Analyst',
      company: 'Company 13',
      location: 'Dallas',
      type: 'contract',
      time: 'Contract',
    },
    {
      id: 14,
      title: 'Security Engineer',
      company: 'Company 14',
      location: 'Phoenix',
      type: 'full-time',
      time: 'Full Time',
    },
    {
      id: 15,
      title: 'Support Engineer',
      company: 'Company 15',
      location: 'San Diego',
      type: 'freelance',
      time: 'Freelance',
    },
    {
      id: 16,
      title: 'Support Engineer',
      company: 'Company 16',
      location: 'San Diego',
      type: 'freelance',
      time: 'Freelance',
    },
    {
      id: 17,
      title: 'Support Engineer',
      company: 'Company 17',
      location: 'San Diego',
      type: 'freelance',
      time: 'Freelance',
    },
  ]);

  // Search Method

  const filteredList = list.filter(item =>
    item.title.toLowerCase().includes(search.toLowerCase()),
  );

  // onPress method

  const onPressJob = item => {
    navigation.navigate('jobDetails', {item});
  };

  // Render Method

  const renderList = ({item}) => {
    return <JobCard item={item} onPressJob={() => onPressJob(item)} />;
  };

  // Main Method

  return (
    <View style={styles.container}>
      <View style={styles.homeText}>
        <Text style={styles.commonText}>Home</Text>
        <Text onPress={logout} style={styles.commonText}>
          Logout
        </Text>
      </View>

      <TextInput
        value={search}
        style={styles.searchInput}
        placeholder="Search Jobs"
        onChangeText={value => setSearch(value)}
      />

      <FlatList
        data={filteredList}
        renderItem={renderList}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  homeText: {
    marginTop: 24,
    flexDirection: 'row',
    marginHorizontal: 10,
    justifyContent: 'space-between',
  },

  searchInput: {
    width: '95%',
    alignSelf: 'center',
    borderBottomWidth: 1,
    marginTop: 15,
    marginBottom: 10,
  },

  commonText: {alignSelf: 'center', fontSize: 22},
});
