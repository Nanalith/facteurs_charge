import React from "react";
import Zone from "./Zone";

class Map extends React.Component {

  calculSelection() {
    for(let region_indice in this.regions) {
      let region = this.regions[region_indice];
      region.props.description.estSelectionnee = region.props.description.id == this.props.id_zone_selectionnee;
    }
  }

  handleClick(valeur) {
    this.props.handleClick(valeur);
    this.calculSelection();
  }

  constructor(props) {
    super(props);
    this.regionsDescriptions = [
      {
        id: 0,
        transform: "translate(-180, -180) rotate(-5) scale(0.5 0.5)",
        path:"m1498.2 705.25c0.3413-1.9642 0.032-2.1244 0.032-4.4179 0-2.0849-0.1569-3.2921 0.3458-5.3028 0.2804-1.1216 0.1705-3.5326 1.3833-4.7264 0.8243-0.81134 5.9411-2.4657 8.3001-4.6111 2.0336-1.8495 2.7677-3.6889 6.2251-3.6889 2.7225 0 3.0984 3.0801 4.4959 2.9972 4.8353-0.2866 3.363 1.8206 6.225 2.5361 2.8257 0.70643 2.526-1.4145 4.8417-0.34584 1.5271 0.70475 4.573 1.3761 5.5334 2.4208 1.9942 2.1692 4.0977 2.138 5.6487 3.6889 0.1537 0.1537 5.4816 1.5652 8.6459 1.3834 2.3431-0.1347 6.0316-1.1024 6.4556-2.1903 0.5174-1.3276 0.7172-2.2158 2.7667-4.2653 1.7544-1.7544 3.5483-3.2709 5.5334-4.15 2.5057-1.1097 3.9921-3.6817 5.5334-5.0723 2.3573-2.1268 4.9785-3.4191 4.2653-5.1876-1.6134-4.0006-3.8716 1.4585-6.9167-1.2681-0.6702-0.60001-5.7866-2.6994-5.9945-4.4959-0.174-1.5029-0.5225-2.2982 0.9222-5.1876 1.0543-2.1086 3.8426-3.1894 1.7292-5.3028-1.1315-1.1315-1.9851-0.94756-3.3431-2.3056-1.2152-1.2152-2.6635-1.6601-2.3056-4.15 0.3393-2.3599 3.2868-2.3056 5.764-2.3056 0.9842 0 1.939-1.1074 2.1902-2.4209 0.375-1.9603-0.2424-3.0086-2.1903-6.4556-0.5114-0.90508-2.2958-0.49176-2.3055-3.9195-0.01-3.4986 3.3372-1.9363 3.2278-5.0723-0.064-1.8243-4.588-1.545-3.8042-3.1125 0.1152-0.2304 1.7417-5.8536-0.1153-6.2251-0.6026-0.12052-7.1473-0.13519-7.1473 2.4209 0 1.4871-0.2101 3.927-1.3833 4.15-3.032 0.5764-4.2134-0.66498-2.9973-3.1125 1.1937-2.4022 2.212-2.3658 2.882-5.0723 1.6139-6.519 2.0137-3.7969 4.7264-5.6487 0.016-0.0109-0.1476-4.3547 1.6139-4.8417 2.3666-0.65432 3.0764-1.4263 5.1876-3.8042 0.6616-0.74522 0.9869-4.1517 1.8444-5.9945 0.706-1.5172 2.5663-0.43534 4.1501-0.46112 3.4611-0.0563 4.9902-1.3954 4.4958-4.4959-0.4377-2.745 1.2681-3.1989 1.0376-6.6862-0.2038-3.0818 0.5161-4.2051 1.6139-6.5709 0.8069-1.7391 1.2264-4.5601 1.7291-6.5709 0.914-3.6558 0.7712-2.5478 3.4584-4.0348 2.0648-1.1426 3.1201-6.1098-0.4611-6.1098-2.5814 0-2.1298 0.17226-4.8417-0.57639-0.9222-0.2546-2.2512-2.4935-3.689-1.4986-1.0676 0.73884-3.251 0.1042-4.2653-0.80696-1.2386-1.1127-5.4275-0.7011-5.9945-1.2681-1.1717-1.1717-1.1088-5.17-2.3055-5.6487-2.4116-0.96461-5.6172-0.15607-7.839-1.3834-3.2404-1.79-6.049-0.21795-6.5709-1.2681-1.2241-2.4629-1.9193-3.4381-4.2653-4.6112-0.7454-0.37271-4.1501-1.7562-4.1501-2.6514 0-2.1511 0.2966-3.6554-0.2305-5.7639-1.1268-4.5071-1.2744 0.3777-2.3056 1.9597-1.2374 1.8984-1.3746 0.89823-3.6889 0.69168-3.0478-0.27202-3.5737-1.1574-3.5737-4.7264 0-2.1574-0.762-2.481-3.343-2.9972-2.8594-0.57188-3.8594-1.4569-5.5334-3.6889-0.3556-0.47405-2.7667-5.0814-2.7667-5.5334 0-3.5837-1.6843-2.962-3.4584-2.075-4.1997 2.0998-1.0841-1.5679-3.8042-1.7292-1.8729-0.11105-1.121-5.5334-2.9972-5.5334-2.7667 0-4.6112 0.34584-7.3779 0.34584-2.4875 0-4.4534-0.55297-4.957 2.5361-0.3458 2.1216-1.164 4.6559-1.0375 6.8015 0.139 2.3581-1.7535 3.8883-0.3458 5.7639 2.0801 2.7718-1.7139 1.468-2.5362 3.1125-0.9266 1.8533-0.6311 1.2698-2.6514 2.3056-1.4193 0.72769-4.0011 1.7292-6.3403 1.8445-1.497 0.0738-5.7848 0.61267-7.032 1.0375-3.2384 1.103-2.7021 1.6216-2.6514 5.5334 0.039 3.0395-1.1901 2.6354-4.0348 3.5736-1.3548 0.44684-3.1274 0.60149-4.6112-0.57639-1.1878-0.94298-3.7024-1.2138-5.7639-1.7292-2.9671-0.74179-5.566-1.1679-5.9945-3.2278-0.2807-1.3493-0.4147-4.6112-1.2681-4.6112-1.9213 0-3.8344-0.14555-5.0722-1.3834-1.7055-1.7055-3.0701-1.6683-3.8042 1.2681-0.6935 2.7738 1.591 2.0828 1.4986 5.1875-0.1019 3.4231 1.0375 5.2102 1.0375 9.2223 0 3.6367-0.5705 3.4701 0.6917 5.9945 1.4309 2.8618-1.2399 3.4507-3.689 1.6139-3.2099-2.4075-2.8572-0.69167-5.5333-0.69167-1.4764 0-3.515-3.1147-4.6112-1.2681-0.9515 1.6028-4.5752 2.4053-6.3403-0.34583-1.3059-2.0354-0.3761-4.7628-1.9598-5.5334-1.9962-0.97132-2.6615-0.30727-5.4181-0.5764-2.7104-0.26462-2.1981 2.2118-3.5736 2.075-1.4773-0.14687-2.2844-0.11529-4.4959-0.11529-1.8699 0-3.8069-2.2747-5.3028-1.1528-1.5168 1.1376-6.5225-0.86983-7.1473 2.4209-0.1968 1.0362-1.3471 3.015 0.2305 3.3431 3.4467 0.71686-0.3657 4.2785 2.9973 4.3806 2.1569 0.0655 3.0894 1.8445-1.4986 1.8445-3.7881 0-2.8413 1.8829 0.2305 3.4584 1.3757 0.70551 0.8304 4.3689 2.4209 4.3806 1.4992 0.011 4.5033-1.8793 7.4931 1.0375 1.7362 1.6938 3.8995 2.6714 6.1098 2.882 2.9906 0.28491 0.5636 4.3141 2.4208 3.8042 6.2087-1.7045 5.7941-0.82334 5.0723 0.34584-0.9881 1.6005-1.251 2.9354 1.7292 2.1903 3.5965-0.89913 1.5708 0.97372 1.3833 3.3431-0.1508 1.9071-0.3663 3.1125 3.5737 3.1125 5.4168 0-0.7631 1.362 0.9222 2.882 1.4884 1.3423 1.8224 5.1655 0.2306 4.0348-2.442-1.7346-3.831-0.48789 0.8069 4.6112 2.1198 2.3305 1.7141 3.4282 3.2278 6.4556 0.7853 1.5706 2.2305 3.9195 4.2654 3.9195 2.2824 0 4.0281-1.1262 3.343 4.0348-0.3182 2.3978-0.5469 2.6832-0.6916 5.1876-0.2339 4.0481-0.8269 1.8784-1.4987 3.8042-0.57 1.6344 0.2326 2.6534 1.3834 2.7667 1.701 0.16742 2.5495 2.4744 3.6889 4.2653 0.6847 1.0762 1.1778 2.436 1.2681 4.3806 0.1366 2.9441-0.9852 2.416-1.8445-0.69167-0.9027-3.2649-1.6288-4.3304-2.3056-4.7264-1.7176-1.0051-2.4894 0.50497-3.2278 3.4584-0.6438 2.5752-1.1474 6.319-1.8444 9.107-0.2847 1.1385-2.4494 4.3254-0.4611 4.3806 4.2669 0.11857 3.539 2.6658 0.3458 2.5361-2.7721-0.11257-0.8764 2.1222-2.5361 6.225-0.7609 1.8807-1.4514 3.1333-2.5362 5.3028-1.1853 2.3707-1.5548 3.6861-2.7667 6.1098-0.7405 1.4811-0.2942 3.1245-1.1527 4.8417-1.0862 2.1722-2.1165 2.7277-5.3437 2.9336-0.4577 0.0904 0.9256-0.26461 2.5107 1.8788 0.8898 1.2033 3.4229 0.5295 4.5648 1.0597 0.6054 0.28109-1.3858 3.1282-0.8152 4.8909 0.446 1.3775 2.4331 0.43772 4.3203 1.7118 0.8566 0.57833 0.8951 2.1194 3.8312 2.1194 1.3934 0 3.6681 0.81315 3.6681 2.69 0 1.8474 1.4703 1.3858 3.2606 1.3858 2.1366 0 3.4945-0.5315 3.9942 1.4672 0.5249 2.0996 0.8578 2.0921 2.9345 2.1194 1.8068 0.0237 3.3652 0.19846 5.1355 0.0815 2.468-0.16303 1.3117 1.1412 4.1572 0.89667 1.6124-0.13857 1.6303-0.5485 1.6303-2.527 0-1.2242 3.5509 0.51516 4.1572 0.97817 1.6892 1.2899 2.8371 2.3619 3.6682 2.2824 1.2971-0.12406 2.2238 1.8164 3.016 1.8748 1.3491 0.0994 0.9782 2.4854 0.9782 3.5866 0 2.4987 0.9436 1.8748 3.2606 1.8748 2.4551 0 3.4052-0.46891 4.2387 1.3858 0.362 0.8055 0.1385 1.3655 2.0379 1.3858 2.269 0.0242 1.0883-1.2473 3.5866-1.1412 3.2401 0.13762 2.2841 2.69 5.2984 2.4454 2.6897-0.2182 0.8366-1.9564 4.7279-2.0379 2.0234-0.0424 1.1786-0.89249 2.5076-0.68123z"
      },
      {
        id: 76,
        path:"M247.47 347.313l-4.157 1.937-.594.093.125.189-1.344 1.155v2.157l1.75 1.938-1.75 3.123-1.562 1.002-.22 1.937-3.312.407.188 2.124 1.187.406-2.75 3.906-4.281.375-.187 2.937-1.782 1.75-.968 2.564-3.906.187 1.562 5.843 1.968 4.314-4.312.78-2.937-1.749-1.375 4.468 2.155 2.344-.968 3.719-1.187 1.375.811 2.344-3.719.781-2.937.78.782 2.72-1.937.593-1 .968-2.939-2.905-5.843.562-1.561 2.75-3.533.375-3.312.594-1.375-1.938-3.126 3.126-2.312-1.968-1.375 2.937.188 2.53-2.157.595-.968-1.375-.969-2.939-2.75 2.344-1.938-.78-2.155.406-1.939 2.344 2.313 3.906-1.562 1.562.593 3.312-1.937 2.532-1.375 3.72 1.564 2.75 5.28.373 3.313 5.47-2.157 1.968 1.563 2.344 2.344 3.5-1.939 2.531-3.124 7.031-5.28 4.501 1.373 2.75-1.187.78-2.906-.593-.813 6.438-1.561 1.187-.314 4.032.5-.282 3.313 1.968 3.905 2.939.376 2.344 3.125 2.53h2.562l6.438-2.75 2.72 3.125 3.718 1 1.375-2.344 1.75.782 11.72.78.404-9.593 2.72.407 5.093 2.937 6.032 1.155h2.561l3.313 4.314 8.406-.406 3.312 5.28 2.94-1.186 8.592 1.187.625 3.594.344 2.062 2.937 2.75 5.845 1.562.186 3.5 3.126 2.751 2.344-.406 3.343-4.095 4.095-.782 6.438 2.157 5.467 4.688 1.564-1.968h1.373l1.375.968 1.157-.562.187-2.75 5.876-1.375 1.937-2.533 2.937-.968h4.095l2.561 2.719 3.126.22v-3.126l-1.562-2.157-2.75-1.187-.594-22.655.218-6.438-2.343.187-1.969-2.906 1.562-2.562 3.312 3.124 2.94-2.344 1.968-1.937.375-3.126 7.031-2.155.78-1.75 5.47-.187 1.75-2.157 10.562-8.407 6.624-4.687 5.688.406v3.906l4.47-.218 2.405.125 1.75-4.063 6.344-3.875-1.376-1.937 1.658-4.406 5.78.811 1.406-10.499 7.72-4.405v-2.502l-5.813-5.78v-4.439l-3.313-5.498-6.905-3.877-.533 3.033-2.78.282-.812-3.033-2.781.531-.531 3.875-2.22-.811-4.687-3.064-2.22 1.126v-5.531l-4.156-2.501.564-4.124-3.314-3.594-1.373-7.187-4.97-6.345-3.625.875-.78-2.719h-1.97l-.374 2.344-5.063 1.564-3.532-9.002-5.468 1.97-1.563 3.5-3.5-2.344-2.75 8.593-2.81 6.464-1.722-2.119-.562-5.531H300.5l-.844-5.532-3.875.562-.53-3.592-.563-.845-5.531 4.72v4.687h-1.375l-.563 4.405-1.375.562-1.095 2.47h-6.093l-.531-.813h-2.782l-1.655 2.75-2.188-.281 1.093-3.313-2.5-1.093 2.5-5.814-3.312-2.468-1.125-7.187-3.032-.813-2.217 2.188-1.095-1.937-3.313 3.313-2.217.28-3.845-5.499z"
      },
      {
        id: 75,
        path:"M188.75 225.687l-3.718 3.907-1.344 2.344-1.375-1.157-.593-1.375-5.283.188-4.874.969-5.281.406v2.718l-2.72 1.781-6.062-1.375-4.094 1.75 1.937 2.75v2.345l4.688 3.905-1.156 2.533 3.124 3.499-1.373 1.781 1.937 2.906.593 5.47-1.157 1.562 1.375 2.343-1.375 2.564.189 1.562 1.562-1.189 1.937 1.97-2.717 1.75-.97 1.156-2.156.594-2.532 1.188-3.124-2.344-3.719 1.562-1.157-3.125-2.749.188-5.969 3.624 1.437 1.313-3.125 2.532-.376 1.968-2.937.376-1.561-1.75-3.908-.376-.405-1.968-2.343-1.564-3.313 1.188 2.155 3.126h2.72l2.75 1.748 2.155 1.751 4.094-.187.782 1.749 2.72.595.999 2.72 1.749.78-.187 2.156-2.344-.375-.782 1.155 1.75 2.532-.968 4.313-2.344-.187.187 2.717.595.97h-2.75l-.375-1.563 1.75-2.344-.593-1.344-.97-.78-.405-4.687-3.313-.407-2.719-3.312-.406 6.842 4.499 3.313.375 3.719.782 4.28.406 4.315 2.344-.22 4.094 3.343 2.749 1.564.188 1.937 2.155.407 6.252 6.25 1.468 6.748.28 1.251 1.375 5.656.376 5.656-.969 1.564-.968-4.687-2.75-10.72-9.969-9 .218-4.093-1.968-.189-3.124 4.688-.97 16.406-2.531 16.595-1.782 12.874-.187 3.343 1.376-4.499 2.719-3.532 3.905 3.532.407 1.156 1.155 1.564-4.874.217-.782-1.188-1.937.782-.407 2.937-2.155 2.939v4.468l-3.5 18.75-4.5 17.188-1.375 6.656-1.157 4.687-3.719 6.438-4.499 5.468-3.5 1.375-2.531.375v2.157l2.343 2.155 3.5.189.188 2.53 2.749.22.781-1.782 3.72 1.562 2.343.594.562 2.343-1.344 1.189v3.687l-2.748 1.376-.189 1.75 1.75 1.968 3.126.97.594-2.938 1.75-1.939-.189 2.532 1.376 1.969h3.5l1.562 2.126 4.688.78 4.499 2.75h7.406l.407 4.094 5.063 3.906 1.968 2.343 2.157-1.155 1.937-.406.97.968 1.78-.968 3.406-1.875.314-4.032 1.561-1.187.813-6.438 2.906.593 1.187-.78-1.373-2.75 5.28-4.5 3.124-7.032 1.94-2.53-2.345-3.501-1.563-2.344 2.157-1.969-3.313-5.469-5.28-.373-1.564-2.75 1.375-3.72 1.937-2.532-.593-3.312 1.562-1.562-2.313-3.906 1.94-2.344 2.154-.406 1.938.78 2.75-2.344.969 2.94.968 1.374 2.157-.595-.188-2.53 1.375-2.937 2.312 1.968 3.126-3.126 1.375 1.938 3.312-.594 3.533-.375 1.561-2.75 5.843-.562 2.94 2.905.999-.968 1.937-.593-.782-2.72 2.937-.78 3.72-.781-.812-2.344 1.187-1.375.968-3.72-2.155-2.343 1.375-4.468 2.937 1.749 4.312-.78-1.968-4.314-1.562-5.843 3.906-.187.968-2.563 1.782-1.75.187-2.938 4.28-.375 2.751-3.906-1.187-.406-.188-2.124 3.312-.407.22-1.937 1.562-1.002 1.75-3.123-1.75-1.938v-2.157l1.344-1.155-.121-.189.59-.093 4.156-1.937 4.968 2.22 3.845 5.498 2.217-.28 3.313-3.313 1.095 1.937 2.217-2.188 3.032.813.094.656 2.532-1.782-.782-1.937-1.188-1.187 1.564-1.937h1.561l1-3.125.782-1.562-.593-3.532 2.53-3.5 3.53-2.157.19-5.469 1.75.969 1.968 2.157h1.937l1.187-1.375-.969-2.344.969-3.5-.593-3.312-1.187-1.375v-2.75l1.78-2.906-.405-2.75-4.5-4.5-.376-1.751 3.719-2.156 2.157-1.157.562-2.75 2.344-1.749-.782-3.719-1.562-1.937-.375-6.062-2.155-5.063-2.157-.782-1.562-2.75-1.375 1.75-1.344-1.75v-2.344l-2.344-3.313-6.438.782-3.719-.968-9.782-1.189L254.97 271l-3.532-.187-.78-.406-2.344.218-1.75-1.187-3.906 4.499-3.126-3.124-1.75 1.749-4.905-.374-.548-.122 1.547-.284.376-2.939-2.126-1.155-1.187-4.095-3.125-.406-1.938-1.937-3.718-2.937.78-2.344v-3.719l-3.53-3.5-.376-2.75-3.344-3.5-1.155-4.688-1.375-.593-1.564-2.157-1.562.968.407 2.157-5.094 1.189h-5.845l.189-2.344v-3.719L195 231.938v-2.344l-3.719-.782-.782-3.125zm21.095 84.781l1.093.031 4.563.158z"
      },
      {
        id: 93,
        path:"M447.344 339.156l-1.75.781-.406 2.938-3.5.406-.594-2.75-1.156-1.156-3.532.375-1.375 1.188-.781 4.093.594.969 4.094.406.78 2.531 1.563.782V354l-3.719-.188-1.562 1.75-4.469-.78-2.531 2.156-1.781-.782-2.531 1.969.968 1.75-1.562 1.563h-4.875v2.343l1.562.781-.594 1.375-3.312 1.344-4.094.406-1.187 3.72-.188 2.343 2.156 1.75-2.156 2.531-2.719-1.375-3.125-.187-.406 1.75 1.969 1.375-2.375 1.562.813 3.313 6.625 1.781 1.187 2.531 1.938.375-.782 7.25-1.156-1.375-1.563-1.375-1 2.938-1.75 1.562-2.53-.187-2.938-2.156-.781-2.532-5.47-.406-4.093-.375-.406-2.344 1.375-2.937-2.531 2.156-3.907-.406-.781-1.375 2.719-3.688-2.719-2.562-2.75.219-2.125 3.312.563 3.5 3.312.406-.563 1.563-2.562.187-2.906 2.938-.781-.969.562-3.906-1.156-1.375-5.281.781-1.032 2.094.563.312 3.312 5.5v4.438l5.813 5.781v2.5l-7.719 4.406-1.406 10.5-5.781-.812-1.657 4.406 1.375 1.938-6.344 3.875-1.75 4.062 6.188.281 8.219.594 1.562 1.563h-2.937l-1.938 3.312 8.375 1.75 6.656-1.156-3.53-3.344 2.343-1.938 3.719 1.563 1.75 3.719 11.156.187 2.906-1.187.594 1.781-3.125 2.719 4.313.187-.782 1.969-1.187 1.375h9.562l4.688 1.563 1 1.343 3.5 1.563.969 3.906 2.156.406 1.969-1.375 3.5-2.156 6.062.594-.188 1.562-1.968.969 4.687.219-1.156-1.188-.406-2.531 2.531-1.75 2.938.969 1.187.375.969 1.187 1.375-.969.375-2.562 1.562-1.344h4.094l1.188-1.781 2.718.781 3.125-1.344v-5.093l-4.094.187 3.125-1.937 1.563-2.156.406-3.125 5.656-.782 3.313-3.719.188-4.468 3.906.781 1.375-1.781 1.969.406.187-6.063 4.5-.375 3.906-3.53h3.5l.188-2.157 3.531-2.125-1.969-4.5 2.938-2.531-.594-2.938 4.313-1.375 1.156-4.281-.563-2.938-1-1.75-.781-2.562-2.906.219-9.188 3.312h-2.937l-5.063-4.094-5.094-1.375H468v-3.53L463.906 382v-3.906l2.75-.375-1.562-1.375-1.969-.594-.969-2.531.781-1.75 3.5-3.719-.562-2.75 2.344-2.531 2.125.187v-1.75l-2.719-1.375-.594-5.656-2.156-.781-2.719.406-5.094-2.563-.78-5.843-2.907-.969-1-1.969-1.281-2.812z"
      },
      {
        id: 84,
        path:"M301.624 247.969l-2.717 3.5-1.564.188-1.75 1.781-1.969-2.157-5.25 5.281v3.126l.97.782.188 1.561-2.719 2.124-2.564-.78-4.874 1-2.532 2.906-.938 2 .158-.032 2.344 3.313v2.344l1.344 1.75 1.375-1.75 1.562 2.75 2.157.782L287 283.5l.375 6.062 1.562 1.937.782 3.72-2.344 1.748-.562 2.75-2.157 1.157-3.719 2.156.375 1.75 4.501 4.5.405 2.751-1.78 2.906v2.75l1.187 1.375.593 3.313-.969 3.499.969 2.344-1.187 1.375h-1.937l-1.968-2.157-1.75-.969-.19 5.47-3.53 2.156-2.53 3.5.593 3.532-.782 1.562-1 3.125h-1.561l-1.564 1.937 1.188 1.187.782 1.937-2.532 1.782 1.03 6.531 3.313 2.468-2.5 5.814 2.5 1.093-1.093 3.313 2.188.282 1.655-2.75h2.782l.53.812h6.094l1.095-2.47 1.375-.562.563-4.405h1.375v-4.688l5.531-4.719.562.845.531 3.592 3.875-.562.844 5.532h1.906l.562 5.531 1.72 2.124 2.812-6.469 2.75-8.593 3.5 2.344 1.563-3.5 5.468-1.97 3.532 9.002 5.063-1.564.373-2.344h1.97l.78 2.72 3.626-.876 4.5 5.75.47.595 1.373 7.187 3.314 3.594-.564 4.124 4.157 2.5v5.532l2.219-1.126 4.687 3.064 2.22.81.53-3.874 2.782-.53.811 3.032 2.781-.282.533-3.033 6.343 3.564 1.031-2.093 5.283-.782 1.155 1.375-.562 3.906.78.968 2.908-2.937 2.561-.187.562-1.563-3.312-.407-.562-3.499 2.126-3.312 2.748-.22 2.72 2.563-2.72 3.688.782 1.375 3.906.407 2.532-2.157-1.375 2.937.406 2.344 4.095.375 5.467.406.782 2.531 2.937 2.157 2.532.187 1.749-1.562 1-2.937 1.563 1.375 1.156 1.375.782-7.25-1.938-.376-1.188-2.53-6.625-1.782-.813-3.313 2.375-1.562-1.968-1.375.406-1.75 3.126.186 2.72 1.376 2.154-2.53-2.155-1.751.187-2.344 1.186-3.719 4.095-.407 3.312-1.342.595-1.375-1.564-.782v-2.343h4.876l1.562-1.562-.968-1.75 2.53-1.97 1.782.78 2.53-2.154 4.47.78 1.562-1.749 3.719.187v-4.281l-1.562-.782-.782-2.53-4.092-.407-.596-.969.782-4.094 1.375-1.186 3.53-.376 1.158 1.156.593 2.75 3.501-.407.405-2.937 1.75-.782 3.75.19-.062-.125 5.845-2.344 2.155 1.373h2.157l.187-2.344 2.532-1.373.969-1.157 5.092-1.969.595-3.312-1-1.564 2.749-4.687-2.53-.969-.783-2.748-5.28-3.126s.315-5.987-.187-7.062a1.256 1.256 0 00-.063-.094l-.03-.03h-.032v-.032h-.095c-.781.196-3.686.405-3.686.405l-2.939-3.344.189-6.624 6.656-2.75.782-1.938-.407-4.312-4.28-4.47-1.376.782v-4.687l-3.719-1.782-.189-1.562 2.157-2.344v-2.719l-3.532-3.719-.186-2.53h-6.656l-4.47.782-4.312 3.499-1.155-1.75-2.157.188-1.969 4.312.218 1.75 2.126 1.75-3.908 2.563-2.53 2.344h-6.438v-3.72l2.344-1.374 3.5-.376.219-1.968-1.187-.782 2.937-3.719-.406-1.155-3.344-1.782-8.124 8.937h-5.656v-2.343l-3.126-1.562-3.719 4.094-2.937.405v-2.749l-2.532-1.157-3.906-5.47-3.532-1.374-1.155-2.53-1.969-.407-1.937 1.375-1.564.406-2.155-1.781-2.157.22-1.375 2.53-3.688 14.438-1.186 2.75-1.375-.189-.751-3.905-1-3.126-2.126.189-1.78 1.748-1.157-1.562-1.75 1.562-2.375-1.562h-1.937l-.78.594-1.158 6.251h-2.157l-1.562 1.562-1.186-1.189-6.251-.968-2.344 1.375h-1.562l-.375-1.375-2.937-.593-.189-3.126-.593-.187-3.53.593 3.25-.562.093-.218 4.094-3.125.187-7.625-1.375-1.937h-3.126l-1.155-1.564h-3.312l-.97-1.186v-2.939l-3.938-7.405-1.937-1.375-3.719 5.094-1.562.374-.593-2.53-1.75-.783-.782 1.564H316.5l-.407-1.75-1.968 1.155-2.126 1.188-2.344-2.563-3.343-1.562-.187-2.53z"
      },
      {
        id: 53,
        path:"M69.781 123.219L68 124.594l-4.469.562-1 1.375-3.125-2.344-4.093 2.75 1.562 2.126-2.719 3.718-3.343-1.937-5.47.187v3.906h-1.562l-.375-1.75-2.343.375-.407-4.5-2.125 2.344-2.343-.969-4.313.407-.781 1.937-2.532.594-.406-2.156-4.468.594v1.375l-3.125.187-1.375-.969-1.563.781-.406 2.344-5.25.188-2.75 3.312 2.344 1.75-3.126 2.563.97 1.75-.782 4.281 3.125.406 1.188-1.187.593.781 7.406-.969 4.875-3.5-4.28 4.094.374 1.938 3.907-1.75-.782 2.75 4.313.187-.188 1.156-4.687-.187-3.719-.969-4.5-2.156-2.719 3.125 3.5 1.187-.187 5.25.968-.781 2.157-3.313 4.093 2.344 1.97.406.78 3.125-1.187 2.125-2.531-.187H20.75l-3.906.594-6.657.375L8.845 166l1.937 1.156 2.156-.187 1.75 1.562 2.532-.187 4.125 4.687.968 5.063-1.375 2.75 4.094.781 4.5-.219.969-1.75-1.75-2.344 1.75.782 1.781-.188 3.125 1.75 1.938-.375v-3.344l.781 3.344 2.531 4.094 5.469.375.219-1.156 1.343 1.937 3.344.594h2.532l2.343 3.719 3.125.781 1.157-1.75-.563 2.125 2.719 1.188 3.531 3.5 1.156 2.156-.375 2.531-.406 2.563 2.344 1.75 1.187-1.375-1.187-1.563v-3.5l2.344.563.78-2.344.594 1.375L74.844 199l1.187-1.969-1.187-2.719L77 197.25l2.719-.406-.563-1.375 2.531.594 1.938 2.343-.969 1.563-2.531-.781-2.938-1.375-1.562 1.968 2.344.781 1.75 2.72 10.562-.97 2.719.594-1.344 1.156.188 1.782.375.281.844-.156 1.75-1.75 1.156 1.344h3.125l3.719-1.938 5.468-2.156.188-5.469 5.094-2.719 12.093-.594.781-2.156 1.97-1.937 4.28-.594.188-2.156 2.938.406 1.75 2.344 3.937.969.75-1.563 1-3.531 2.531-6.25 1.375-.781 3.313.406v-5.281l-1.375-1.375v-5.657l-.594-1.937v-3.125l1.969-1.969v-3.906l-.969-.781.188-5.47-1.563-.78h-2.344L143.812 146l-2.125 2.531-1.75.219-1.562 2.125-1.563-.375-3.343-2.938-1.156-3.718-.594-2.469h-9.594l-3.531-2.156 2.344-3.125-4.688-.188-3.125 3.531-3.719-.406-.375 2.156-2.344.188-.187-2.719-1.969-.594-1.375 1.563v-3.906l-2.344 1.75-3.5-.594-1.187 2.344-7.219 3.906v1.969h-1.562v-3.531l-4.094-1.938.375-3.531-3.688-2.719v-3.313l-2.75-.593.188-3.125-2.125-.188.188-2.156H71.53l-.594 1.938z"
      },
      {
        id: 52,
        path:"M182.5 146.406l-1.938.188-.812 1.937-2.906 1.188-5.281-.781-5.282 3.125-1.937-1.375-2.938 1.968-2.156-1.562-1.375-2.344-2.906-1.188-1.969 1.563-3.313-.406-.187 5.094.969.78v3.907l-1.969 1.969v3.125l.594 1.937v5.656l1.375 1.375v5.282l-3.313-.406-1.375.78-2.531 6.25-1 3.532-.75 1.563-3.938-.97-1.75-2.343-2.937-.406-.188 2.156-4.28.594-1.97 1.937-.78 2.156-12.094.594-5.094 2.719-.188 5.469-5.469 2.156-3.718 1.938h-3.125l-1.156-1.344-1.75 1.75-.844.156 1 .688-3.719 3.312.781.781.781 1.563-1.968 2.75 2.156 1.156 3.719.781.375-1.562 2.156 2.75h3.531l2.531-2.75h3.313l-3.5 1.75.188 1.969.78 1.75-2.156 2.156h-2.343l.406 2.937 4.281-.781 5.094 4.688-6.063 7.812-.187 4.688 6.031 5.843-.187 1.75h1.75l3.719 11.156 3.906 1.938 3.906 3.906h4.5l1.75 3.906h4.313L135 274l4.313 2.156.187-2.75 1.094 1.031 5.969-3.625 2.75-.187 1.156 3.125 3.719-1.563 3.125 2.344 2.53-1.187 2.157-.594.969-1.156 2.719-1.75-1.938-1.969-1.563 1.188L162 267.5l1.375-2.563-1.375-2.343 1.156-1.563-.594-5.469-1.937-2.906 1.375-1.781-3.125-3.5 1.156-2.531-4.687-3.906v-2.344l-1.938-2.75 4.094-1.75 6.063 1.375 2.718-1.781v-2.72l5.281-.405 4.875-.97 5.282-.187.594 1.375 1.375 1.156 1.343-2.343 3.719-3.906h1.5l2.219-8 3.125-3.72-.219-4.28 1.969-2.563v-1.156l-.969-1.188 1.938-3.906 3.906 2.75h2.156l-1.188-3.906 2.375 1.562 1.344-1.969 5.656-1.562-.968-2.344 1.375-1.75 2.937-1.156 2.719-3.531v-3.719h1.969l.781-2.719.188-4.094-1.938-1.78 1.563-2.72L223.5 171l-2.719-1.938-2.531-.406-2.75-4.094h-.781l-.188 1.938-.187-1.344h-4.094l-1.969-2.937-3.312-1.188L204 154l-1.563-2.125-5.28.188-5.282 4.875-3.313-.188-1-3.531-2.53-.969-.782-4.281z"
      },
      {
        id: 28,
        path:"M241.937 61.5l-1.281 1.562-8.376 6.438-14.842 3.719-9.782 3.5-8 4.313-4.687 7.03L194 93.53l3.906 2.94 5.656 1.155-.906.155-4.563.813-7.436 4.312-8.375 3.313-6.656-3.717-16.002-2.344-3.719-1.939-7.624 1.94-.187-4.688L143 89.438l1.562-3.907h2.157l-1.937-5.281-8.407-.407-4.5 3.126-5.063-3.312-7.25-2.157-.781 1.968 4.125 3.312v4.314l-1.562 1.938.969.968.593.407-.406 3.719 1.375 3.123 4.5 5.063.97 4.5.968 1.376v7.031l2.343 4.688v5.467l-2.532 5.063 2.72 7.031 4.311.97.376 1.967-2.124.97h-3.688l.593 2.47 1.157 3.718 3.344 2.937 1.562.375 1.562-2.125 1.75-.218 2.126-2.533 1.968 1.564h2.344l1.562.78v.375l3.312.407 1.969-1.562 2.908 1.187 1.375 2.343 2.155 1.564 2.937-1.97 1.939 1.375 5.28-3.124 5.281.78 2.906-1.186.813-1.938 1.938-.188 1.75 1.564.782 4.28 2.53.97 1 3.53 3.313.188 5.28-4.876 5.283-.187L204 154l.968 7.031 3.313 1.189 1.968 2.937h4.094l.19 1.344.186-1.937h.782l2.748 4.094 2.126.342v-4.623l-1.344-1.782-.407-1.564 2.94-1.748 2.936-.595 1.938-2.344-.376-7.218-4.125-3.5-.187-3.345-.655-.437 2.812-2.686h2.717l7.063-3.688 2.312.969h4.908l1.155-1.376v-2.937l3.907-1.937v-3.125l1.062-.876-.093-.875 1-1-1.75-.375v-1.562l-1-1.562.781-.968 5.468-1.564 1.375-2.344 1.188-4.312 1.438-1.782.313-2.312 1.749.968 1.375-.373-1-1.564-.562-4.499-1.75-1.564.561-1.748 1.376-2.564.781-1.344h-1.968V91.5l-1.157-1.937.782-3.906.782-1.97h-1.564l.782-1.938 1.937-2.343-1.937-3.53-.594-3.502-8.595-8.406-.968-1.937-2.155.188z"
      },
      {
        id: 24,
        path:"M247.156 126.094l-1.187.969v3.124l-3.906 1.938v2.938l-1.157 1.375H236l-2.313-.97-7.062 3.688h-2.719l-2.812 2.688.656.437.188 3.344 4.125 3.5.375 7.219-1.938 2.344-2.938.593-2.937 1.75.406 1.563 1.344 1.781V169l.406.063L223.5 171l-2.313 2.938-1.562 2.718 1.938 1.781-.188 4.094-.781 2.719h-1.969v3.719l-2.719 3.531-2.937 1.156-1.375 1.75.969 2.344-5.657 1.563-1.344 1.968-2.375-1.562 1.188 3.906h-2.156l-3.906-2.75-1.938 3.906.969 1.188v1.156l-1.969 2.563.219 4.28-3.125 3.72-2.219 8h.25l.781 3.125 3.719.78v2.345l4.688 1.375v3.718l-.188 2.344h5.844l5.094-1.188-.407-2.156 1.563-.969 1.562 2.157 1.375.594 1.156 4.687 3.344 3.5.375 2.75 3.531 3.5v3.719l-.78 2.344 3.718 2.937 1.938 1.938 3.125.406 1.187 4.094 2.125 1.156-.375 2.937-1.563.281.563.125 4.906.375 1.75-1.75 3.125 3.125 3.906-4.5 1.75 1.188 2.344-.219.781.406 3.532.188 1.156-3.125 9.781 1.188 3.719.968 6.281-.75.938-2 2.531-2.906 4.875-1 2.563.781 2.718-2.125-.187-1.562-.969-.781v-3.125l5.25-5.282 1.969 2.156 1.75-1.78 1.562-.188 2.719-3.5 4.5.375.063 1.062 1.5-4.781-.97-1.75.188-2.531.594-5.094-2.156-2.125.406-4.688-1.969-4.125-.187-2.718-3.531-2.75-.563-2.344 1.75-2.531v-3.719l-2.344-2.719-.187-1.969 3.906-1.156-.594-2.156-.594-3.125-2.53-3.5-.594-2.156h3.906l2.75-1.969.375-2.906-1.75-1.969 5.094-4.281v-3.531l-2.563-2.72-.969-3.124-3.531-3.344-4.875 2.75-.375-1.563-2.156-.187-.594 1.563-1.938.375-5.28-.188-2.157 1.375-1.75-1.563 3.125-2.156-.188-3.312-2.343-1.188-1.969-2.937-5.25-.375-2.156-1.75-2.531 2.344-6.25.562-.407-5.25-.406-.594-.375-2.531-4.094-.781-1.781-2.156-.563-4.313-2.343-.375-.406-2.156-2.72-1.938-1.374-3.344 1.375-2.343-1.375-1.563v-1.937l.781-2.156-1.563-1.563-.593-2.344z"
      },
      {
        id: 27,
        path:"M318.437 157.345l-1.75 1.342-7.625-.374-3.499 1.749-1.375 2.939 1.562 1.748-2.344 2.75-1.782 2.126 3.532 3.344.97 3.126 2.56 2.717v3.532l-5.091 4.281 1.748 1.968-.375 2.906-2.749 1.97h-3.907l.595 2.156 2.53 3.5.594 3.124.593 2.157-3.906 1.156.19 1.97 2.343 2.717v3.72l-1.75 2.531.561 2.344 3.533 2.75.186 2.718 1.969 4.125-.407 4.688 2.157 2.125-.593 5.094-.189 2.531.969 1.75-1.5 4.781.125 1.469 3.343 1.562L312 255l2.126-1.188 1.968-1.156.407 1.75h2.906l.782-1.563 1.75.782.593 2.53 1.562-.373 3.72-5.094 1.936 1.375 3.939 7.405v2.939l.969 1.186h3.312l1.155 1.564h3.126l1.375 1.937-.187 7.625-4.094 3.125-.093.218.28-.03.595.186.187 3.126 2.937.593.375 1.375h1.562l2.344-1.375 6.251.968 1.186 1.189 1.564-1.562h2.155l1.158-6.251.78-.594h1.937l2.375 1.562 1.75-1.562 1.157 1.562 1.78-1.748 2.126-.189 1 3.126.75 3.905 1.376.189 1.186-2.75 3.688-14.438 1.375-2.53 2.157-.22 2.155 1.781 1.564-.406 1.937-1.375 1.969.406 1.155 2.53 1.126.438 2.406.938 3.906 5.47 2.532 1.154v2.75l2.937-.406 3.719-4.092 3.124 1.562v2.343h5.656l8.126-8.937-.344-.187.375-4.094 2.937-3.5-1.968-.78.218-1.376 12.094-11.343-.375-9.375 4.282-2.126 2.937-1.375 2.72-2.53.217-3.72 2.72-1.375 6.249-7.22-.969-2.344 2.157-.968 2.53-3.124-1.374-1.375-4.688.969-.187-.782 5.063-5.843 2.593-.407-.969-4.156-.593-2.157-2.75.406-.376-2.343.97-1.782.188-2.344-.564-1.342-3.53-2.75-3.126-.189-.78-1.562-6.251-3.312-1.75-1.968-1.75-1.158-1.563.782-.218 1.156-1.562.968h-.969l-2.939-3.312h-4.092l-1.75 1.375-1.564.189-2.53-1.938.186-2.157-1-.782-3.687.596-.594 1.937-1.968 1.375-1.344-1.564-.969.595.751 1.156-1.937 1.188.593 1.562-2.157.782v2.53h-2.75l-.187 1.562-2.719.595.189 2.344 1.748.187-.968 1.155-.594 3.908h-1.75l-2.937 1.186-3.126-1.186-2.719 1.186v1.969l2.126.375-2.313-.407-.813 1.97-4.28.97-.407-.97-3.124-3.907-1.75.969-2.344-.187-.782-1.562-3.124.187-.188-3.312-1.75-1.189 2.531-2.717-4.5-6.063-3.5-3.719-3.125-1.75h-5.656l-.407 2.53-2.53 1.376-6.438.188-1 2.155-1.375-.186-1.155-2.157-3.908 1.97-7.811-.407-.97-2.157-2.156-2.906-.375-3.532-3.126-3.719-1.968 1.376-3.53-2.718.593-5.282-5.063-5.281h-2.344z"
      },
      {
        id: 44,
        path:"M367.625 55.844l-1.969 2.906-1.75 1.781V64.625l-2.344 1.562-4.28 1.375-2.345.97-2.75-2.158h-3.719l-.53 3.47 1.75 3.312-1.75 1.562-.188 2.94.97 1.56-.783 2.345L345 83.125v2.532l-3.719.78-.593 1.564 2.562 1.375-.782 2.717-.593 2.344.188 6.658-1.375.373-3.312-2.155-2.344 1 .405 1.937h-4.124l-3.688 2.75v5.25l2.72 1.781.78 1.75-4.5.374-.563 1.782 1.75 1.157-.78 1.187-1.75.782.375 1.344h2.53l1 1.375-1.75 1.186-1.562 4.095-2.937 1.375-1 2.124-.969 1.188.218 1.155-1.562 1.002-.406 2.717 1.562.969.782 2.939-.969 1.748.593 1.376 2.906-.187v1.562l-2.719 1.157-.187 2.344-1.375 1.781-.782 3.906-.435 3.281 1.217 1h2.344l5.063 5.28-.593 5.283 3.53 2.718 1.968-1.376 3.126 3.72.375 3.531 2.155 2.906.97 2.157 7.812.407 3.908-1.97 1.155 2.157 1.375.186 1-2.155 6.438-.188 2.53-1.376.407-2.53h5.656l3.126 1.75 3.499 3.72 4.5 6.062-2.532 2.717 1.75 1.189.19 3.312 3.123-.187.782 1.562 2.344.187 1.75-.969 3.124 3.908.406.968 4.281-.968.813-1.97.187.03v-1.968l2.72-1.186 3.125 1.186 2.937-1.186h1.75l.594-3.908.968-1.155-1.748-.187-.189-2.344 2.72-.595.186-1.562h2.75v-2.53l2.157-.782-.593-1.562.593-.375 1.344-.813-.75-1.156.968-.595 1.344 1.564 1.968-1.375.594-1.937 3.687-.596 1 .782-.187 2.157 2.53 1.938 1.565-.189 1.75-1.375h4.092l2.94 3.312h.968l1.562-.968.218-1.156 1.563-.782 1.75 1.158 1.75 1.968 6.156 3.25.095.062.78 1.562 3.125.189 3.53 2.75.565 1.342-.189 2.344-.969 1.782.376 2.343 2.75-.406.593 2.157.969 4.156 2.313-.375-.407 2.126 1.375 1.186 7.22-.186 3.717-2.94.189-4.311 1.968-2.53-2.562-2.938-1.344-3.126 1.562-2.125v-4.906l.969-2.344v-3.905l1.75-2.533-1.937-2.719-.22-6.25 5.094-9.967-.593-5.656 2.344-7.627.593-6.656 5.063-3.687v-2.344l1.968-2.562h1.562l1.75-1.75-.375-3.313 1.751-4.687 2.72-.593-2.72-2.157-4.874-.563-4.312-2.157-2.94 1.75-1.561-1.75h-2.126l-3.719 1.033-.405.125-1.344-1.938-3.907-2.343-1.375-2.157-4.688.406-2.748 2.53-6.627.19-1.968-1.376c-.132-.24-1.093-1.935-1.937-2.406a2.048 2.048 0 00-.125-.062 1.026 1.026 0 00-.093-.031l-.062-.031h-.127c-.915 0-2.687-1.029-2.906-1.158l-2.75 1.158-.187 2.343-3.312.405-1.968-3.719-1.158-.404v-2.72l-2.75-1.188-.187-4.687-1.968-1.938-4.094-1.968h-1.938l-.593.406h-1.97l-2.717-2.343-2.94.186-2.343 1.969-.593.968h-3.313l-1.157-1.186h-3.124l-3.532-3.906h-4.499l-2.343 2.155-3.313.19-1.157 1.186h-1.186l-.782-3.72-1.562-1.561-1.126-.158-1.407-.218-.781-3.905-1.562-1.189-5.47-.593-.968-2.532-1.78-1.156-6.251-.781-.376-4.5.782-.781v-1.75l-3.125-1.969.595-2.155.78-1.94-1.375-1.186 2.157-1.937v-3.532l-.782-.562z"
      },
      {
        id: 11,
        path:"M255.563 109.688L254 111.624l-1.188 4.313-1.375 2.343-5.468 1.563-.781.969 1 1.562v1.563l1.75.374-1 1 .093.876.125-.094 1.938 1.937.593 2.344 1.563 1.563-.781 2.156v1.937l1.375 1.563-1.375 2.344 1.375 3.343 2.718 1.938.407 2.156 2.343.375.563 4.313 1.781 2.156 4.094.781.375 2.531.406.594.406 5.25 6.25-.563 2.532-2.343 2.156 1.75 5.25.375 1.969 2.937 2.344 1.188.187 3.312-3.125 2.156 1.75 1.563 2.156-1.375 5.281.188 1.938-.375.594-1.563 2.156.188.375 1.562 4.875-2.75 1.781-2.125 2.344-2.75-1.563-1.75 1.375-2.938 3.5-1.75 7.625.375 1.75-1.343.157.156.437-3.281.781-3.906 1.375-1.782.188-2.344 2.719-1.156v-1.562l-2.906.187-.594-1.375.969-1.75-.782-2.937-1.562-.969.406-2.719 1.563-1-.22-1.156.563-.688-3.281-.687-1-2.344-1.75-.594-5.25-5.062-.594-4.313-2.156-1.562-1.188.594-1.937 1.562-1.938-.594-3.343 1.376-2.719-1.563-1.188 1.563-1.75.187-1.187-.969-1.938-1.156-2.343 1.563-1.375-1.376-4.281-2.53-4.125-2.157-2.125.969-2.344.594-1.563-1.188-3.125-1.938-2.531 1.938-3.719.406-5.281-.406-1.188-1.938z"
      },
      {
        id: 32,
        path:"M285.782 4.063L279.531 7l-9.75 1.562-11.344 2.157-8.593 6.625v26.374l-.062.782-.531 6.438 4.312 3.906v1.968l-5.28-3.125-6.346 7.813 1.689.72 2.155-.19.968 1.938 8.595 8.406.594 3.501 1.937 3.53-1.937 2.344-.782 1.938h1.564l-.782 1.97-.782 3.906 1.157 1.937v3.343h1.968l-.781 1.344-1.376 2.564-.562 1.748 1.75 1.564.563 4.5 1 1.563-1.375.373-1.75-.968-.312 2.312.124-.155.751 1.75 1.187 1.937 5.28.407 3.72-.407 2.532-1.937 3.123 1.937 1.564 1.187 2.344-.593 2.124-.969 4.125 2.157 4.281 2.53 1.375 1.376 2.344-1.562 1.937 1.155 1.189.969 1.75-.187 1.187-1.564 2.719 1.564 3.343-1.375 1.938.593 1.937-1.562 1.188-.595 2.155 1.564.595 4.312 5.25 5.063 1.75.593 1 2.344 3.282.687.406-.5 1-2.124 2.937-1.375 1.562-4.095 1.75-1.186-1-1.375h-2.53l-.375-1.344 1.75-.782.78-1.187-1.75-1.157.564-1.782 4.498-.373-.78-1.75-2.719-1.782V105l3.688-2.75h4.124l-.405-1.937 2.344-1 3.312 2.155 1.375-.373-.188-6.658.593-2.344.782-2.717L340.688 88l.593-1.564 3.72-.78v-2.532l2.936-1.562.782-2.344-.969-1.562.187-2.939 1.75-1.562-1.75-3.312.531-3.47h-4.281L344 64.437l3.906-2.344-.593-3.719-3.719-.968.969-1v-2.72l2.937-2.154-.78-1.564-6.252-4.874-10.937.593-1.157 1.937H327l.189-6.843-3.126-3.687-2.344.375-1.375-1.564-3.905 1.75-1.344-1.343-2.75-.407-.78-2.53-.19-7.813-1.75-.78-.218-1.189h-1.157l-.405-2.343-2.532.22-4.874 1.561-2.344 2.906h-2.344L294.187 24l-.594-2.157-1.937-2.155h-2.75l-1.156-2.126v-3.344l1.344-2.124-.781-2.939z"
      },
    ];
    for(var regionKey in this.regionsDescriptions) {
      let regionDescription = this.regionsDescriptions[regionKey];
      regionDescription.meilleur_facteur = this.props.meilleurs_facteurs[regionDescription.id][this.props.index_temps];
      regionDescription.estSelectionnee = regionDescription.id == this.props.id_zone_selectionnee;
    }
  }

  render() {
    this.regions = [];
    for (let i = 0; i < this.regionsDescriptions.length; i++) {
      this.regions.push(
        <Zone
          key={this.regionsDescriptions[i].id} 
          description={this.regionsDescriptions[i]}
          onClick={(i) => this.handleClick(i)}
        />
      );
    }
    let classes = 'region ';
    classes += this.props.meilleurs_facteurs[0] + '_couleur';
    return (
      <div class="map">
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" display="inline" version="1" viewBox="0 0 800 600">
          {this.regions}
        </svg>
      </div>
    );
  }
}

export default Map;