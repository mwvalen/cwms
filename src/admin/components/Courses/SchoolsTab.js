import {connect} from 'react-redux'
import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import {getField} from 'common/util/schema'
import {EntityTable} from './Tables'
import AutoComplete from 'material-ui/AutoComplete'
import SchoolModal from './SchoolModal'

const colList = ['name', 'phone', 'email',
  'address', 'postalCode'].map(key => getField(key))

const schoolFilter = (searchText, key) => {
  return searchText !== '' &&
    key.toLowerCase().indexOf(searchText.toLowerCase()) === 0
}

const menuProps = {
  desktop: true,
  disableAutoFocus: true,
}

class SchoolsTab extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      showAddSchoolModal: false,
      selected: null,
      school: null,
      searchText: '',
    }
  }
  componentWillReceiveProps (nextProps) {
    if (this.state.school) {
      this.setState({
        school: nextProps.schools.find(({_id}) => _id === this.state.school._id)
      })
    }
  }
  closeAddSchoolModal = () => {
    this.setState({
      showAddSchoolModal: false,
      selected: null
    })
  }
  showAddSchoolModal = () => {
    this.setState({
      showAddSchoolModal: true
    })
  }
  editSchool = school => {
    this.setState({
      selected: this.state.school,
      showAddSchoolModal: true
    })
  }
  handleInputChange = searchText => {
    this.setState({
      searchText
    })
  }
  handleSchoolNameChange = schoolName => {
    this.setState({
      school: this.props.schools
        .find(school => school.name === schoolName)
    })
  }
  render () {
    if (this.props.SchoolError) {
      return (
        <div>Unable to load Schools</div>
      )
    }
    if (!this.props.schools) {
      return (
        <div>Loading Schools...</div>
      )
    }
    return (
      <div style={{paddingTop: '40px'}}>
        <SchoolModal isOpen={this.state.showAddSchoolModal}
          closeModal={this.closeAddSchoolModal} selected={this.state.selected}/>
        <RaisedButton onClick={this.showAddSchoolModal} primary={true}
          label="Add School" />
        <div>
          <AutoComplete
            hintText="Enter school name"
            floatingLabelText="Find your school"
            filter={schoolFilter}
            dataSource={this.props.schools.map(({name}) => name)}
            menuProps={menuProps}
            searchText={this.state.searchText}
            onNewRequest={this.handleSchoolNameChange}
            onUpdateInput={this.handleInputChange}
            maxSearchResults={5} />
        </div>
        {
          this.state.school &&
            <EntityTable items={[this.state.school]}
              colList={colList}
              onEditClick={this.editSchool}/>
        }
      </div>
    )
  }
}

const mapStateToProps = ({schools}) => ({...schools})
export default connect(mapStateToProps, {})(SchoolsTab)
