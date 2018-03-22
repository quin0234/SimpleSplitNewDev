import React from 'react';
import {Scene, Router, Actions, Modal } from 'react-native-router-flux';
import LoginForm from './components/auth/LoginForm';
import ForgettenPassword from './components/auth/ForgottenPassword';
import SignUpForm from './components/auth/SignUpForm';
import Main from './components/Main';
import NewExpense from './components/AddNews/NewExpense';
import NewMemo from './components/AddNews/NewMemo';
import NewRequest from './components/AddNews/NewRequest';
import CreateUserProfile from './components/auth/CreateUserProfile';
import NewExpenseForm from './components/AddNews/NewExpenseForm';
import NewExpenseSummary from './components/AddNews/NewExpenseSummary';

const RouterComponent = () => {
    return (
        <Router>
        <Modal>
            <Scene key="root" hideNavBar>
                <Scene key="auth">
                    <Scene key="login" component={LoginForm} title="Login" hideNavBar/>
                    <Scene key="forgottenPW" component={ForgettenPassword} 
                    title="Forgotten Password" 
                    back={true} 
                    backButtonTintColor="#ffffff"
                    navTransparent={true}
                    titleStyle={{color:'#ffffff'}}/>

                    <Scene key="signUp" component={SignUpForm} 
                    title="Create Account" 
                    back={true} 
                    backButtonTintColor="#ffffff"
                    navTransparent={true}
                    titleStyle={{color:'#ffffff'}}/>

                    <Scene key="saveAccount" component={CreateUserProfile} 
                    title="Save Account"  
                    navTransparent={true}
                    back={true} 
                    backButtonTintColor="#ffffff"
                    titleStyle={{color:'#ffffff'}}/>
                </Scene>

                <Scene key="mainApp">
                    <Scene key="main" component={Main} hideNavBar/>
                </Scene>
            </Scene>
            <Scene key="newexpenseModal" component={NewExpense} title="New Expense"
            hideNavBar
            
            />
            <Scene key="newexpenseform" component={NewExpenseForm} title="New Expense" hideNavBar/>
            <Scene key="newexpensesum" component={NewExpenseSummary} title="Expense Summary" hideNavBar/>
            <Scene key="newmemoModal" component={NewMemo} />
            <Scene key="newrequestModal" component={NewRequest} />
        </Modal>    
        </Router>
    );
};

export default RouterComponent