import { StyleSheet, Text, View } from "react-native";
import ExpenseSummary from "./ExpenseSummary";
import ExpenseList from "./ExpenseList";
import { GlobalStyles } from "../../constants/styles";


function ExpenseOutput({ expenses, expensesPeriod ,fallbackText}) {
    let content = <Text style={styles.infoText}>{fallbackText}</Text>

    if(expenses.length > 0){
        content = <ExpenseList expenses={expenses}/>
    }
  return (
    <View style={styles.container}>
      <ExpenseSummary expenses={expenses} periodName={expensesPeriod} />
      {content}
    </View>
  );
}

export default ExpenseOutput;

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:GlobalStyles.colors.primary700,
        padding:24
    },
    infoText:{
        color:'white',
        fontSize:16,
        textAlign:'center',
        marginTop:32
    }
})
