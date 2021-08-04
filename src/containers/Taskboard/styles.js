import { ThemeProvider } from "@material-ui/core"

const styles = theme =>({
    taskboard : {
        display : "flex",
        alignItems : "center"
    },
    shape: {
        backgroundColor : theme.color.primary,
        color: theme.shape.textColor,
        // borderColor: theme.shape.borderColor,
        padding: 20,
        margin: 10,
        borderRadius: theme.shape.borderRadius
    }
})
export default styles