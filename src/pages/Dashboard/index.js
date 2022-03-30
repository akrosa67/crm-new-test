import React, { Component } from "react"
import PropTypes from 'prop-types'
import MetaTags from 'react-meta-tags'
import {
  Container
} from "reactstrap"
import { connect } from "react-redux"

//import action
import { getChartsData } from "../../store/actions"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

//i18n
import { withTranslation } from "react-i18next"

class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      reports: [
        { title: "Orders", iconClass: "bx-copy-alt", description: "1,235" },
        {
          title: "Revenue",
          iconClass: "bx-archive-in",
          description: "$35, 723",
        },
        {
          title: "Average Price",
          iconClass: "bx-purchase-tag-alt",
          description: "$16.2",
        },
      ],
      email: [
        { title: "Week", linkto: "#", isActive: false },
        { title: "Month", linkto: "#", isActive: false },
        { title: "Year", linkto: "#", isActive: true },
      ],
      modal: false,
      subscribemodal: false,
      chartSeries: [],
      periodType: "yearly"
    }

    this.togglemodal.bind(this)
    this.togglesubscribemodal.bind(this)
  }

  componentDidMount() {
    const { onGetChartsData } = this.props
    //setTimeout(() => this.setState({ subscribemodal: true }), 2000)
    onGetChartsData("yearly")
  }


  togglemodal = () => {
    this.setState(prevState => ({
      modal: !prevState.modal,
    }))
  }

  togglesubscribemodal = () => {
    this.setState(prevState => ({
      subscribemodal: !prevState.subscribemodal,
    }))
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.setState({ ...this.state, chartSeries: this.props.chartsData })
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className="page-content">
          <MetaTags>
            <title>Dashboard | Zero Gravity CRM</title> 
          </MetaTags>
          <Container fluid>
            {/* Render Breadcrumb */}
            <Breadcrumbs
              title={this.props.t("Dashboards")}
              breadcrumbItem={this.props.t("Dashboard")}
            />
          </Container>
          </div>
      </React.Fragment>
    )
  }
}

Dashboard.propTypes = {
  t: PropTypes.any,
  chartsData: PropTypes.any,
  onGetChartsData: PropTypes.func
}

const mapStateToProps = ({ Dashboard }) => ({
  chartsData: Dashboard.chartsData,
})

const mapDispatchToProps = dispatch => ({
  onGetChartsData: (periodType) => dispatch(getChartsData(periodType)),
})

export default connect(
  mapStateToProps, mapDispatchToProps
)(withTranslation()(Dashboard))

