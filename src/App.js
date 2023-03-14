import React, { Component,Suspense,lazy } from 'react'
import { connect } from "react-redux"
import '../static/css/App.css';
import mockData, { defaultAccount } from "../static/mockData";
// const Header = lazy(() => import(/* webpackChunkName: "header" */'./components/Header'));
//Babel present in this package json is outdated so will not able to use thi syntax 
import Header from "./components/Header"
import { fetchDataSuccessAction, setDefaultAccount, setSelectedAccountAction } from './actions';
import Select from './components/Select';
import Table from './components/Table';
import Box from './components/Box';



//App.js was a class component already continuing with that 


class App extends Component {


    componentDidMount() {
        this.props.fetchDataSuccess(mockData);
        this.props.setDefaultAccount(defaultAccount);
    }
    
    render() {
        const tableData = this.props.accounts[this.props.selectedAccount];
        return (
            <div className="App">
                <Suspense fallback = {"Loading Header"}>
                    <Header/>
                </Suspense>
                <main>
                    <div className='container'>

                        <Box>
                            <Select className='select' onChange={(e) => {
                                this.props.setSelectedAccount(e.target.value);
                            }}
                                title="Select account"
                                value={this.props.selectedAccount}
                                aria-label="Account selection"
                                aria-describedby="account_description"
                                options={this.props.accounts}
                            />
                        </Box>
                        <Box className='detailsdiv'>
                            <Table tableData={tableData} />
                        </Box>

                    </div>
                </main>

            </div>
        )
    }
}


const mapStateToProps = (state) => ({
    accounts: state.accounts,
    selectedAccount: state.selectedAccount
});

const mapDispatchToProps = (dispatch) => ({
    fetchDataSuccess: (mockData) => dispatch(fetchDataSuccessAction(mockData)),
    setDefaultAccount: (defaultData) => dispatch(setDefaultAccount(defaultData)),
    setSelectedAccount: (key) => dispatch(setSelectedAccountAction(key))
});


export default connect(mapStateToProps, mapDispatchToProps)(App);
