import http from '../../utils/axios-plugin'

export default {
    GetDataList(query) {
        return http.post('/PB/PB_Tray/GetDataList', query)
    }
}